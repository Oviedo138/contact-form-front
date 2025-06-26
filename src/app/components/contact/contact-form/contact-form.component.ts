import { animate, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../services/toast/toast.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ContactService } from '../../../services/contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-50%)', opacity: 0 }),
        animate('150ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('150ms', style({ transform: 'translateY(-50%)', opacity: 0 }))
      ])
    ]
    )
  ]
})
export class ContactFormComponent {

  public contactForm!: FormGroup;
  public isLoading: boolean = false;
  public invalid: boolean = false;
  public invalidFlag: string = '';
  public invalidCaptcha: string = '';
  public activeLang = 'en';
  public translateJson: any = {};
  public alerts: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private translate: TranslateService,
    private contactService: ContactService,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,6}$')]],
      subjet: ['', Validators.required],
      message: [''],
    });
  }

  ngOnInit(): void {
    this.onLangChange();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.onLangChange();
    });
  }

  onLangChange() {
    this.translate.get(['CONTACT']).subscribe((data: any) => {
      this.translateJson = data;
      let ale = this.translateJson['CONTACT'].ALERTS;
      this.alerts = ale;
    });
  }

  formValidation() {
    if (this.contactForm.controls['name'].errors) {
      this.invalidFlag = 'invalid-name';
      this.invalid = true;
    }
    if (this.contactForm.controls['subjet'].errors) {
      this.invalidFlag = 'invalid-subjet';
      this.invalid = true;
    }
    if (this.contactForm.controls['email'].errors) {
      this.invalidFlag = 'invalid-email';
      this.invalid = true;
    }
    if (this.contactForm.invalid) {
      this.invalidFlag = 'invalid-all';
      setTimeout(() => {
        this.resetValidations()
      }, 3000);
      return;
    }
    this.submit(this.contactForm.value);
  }

  resetValidations() {
    this.invalid = false;
    this.invalidFlag = '';
  }

  errorMessage(formControl: string): any {
    if (this.contactForm.get(formControl)?.hasError('required')) {
      return this.alerts.REQUIRED;
    } else {
      if (this.contactForm.get(formControl)?.hasError('pattern')) {
        return this.alerts.INVALIDEMAIL;
      } else {
        return this.alerts.INVALID;
      }
    }
  }

  async submit(formValue: any) {
    console.log(formValue);
    this.isLoading = true;
    this.invalidCaptcha = '';
    try {
      this.recaptchaV3Service.execute('importantAction').subscribe(async (token: string) => {
        // formValue.token = "token";
        formValue.token = token;
        this.isLoading = true;
        try {
          let response = await this.contactService.sendContact(formValue);
          this.contactForm.reset();
          this.isLoading = false;
          this.toastService.showSuccess(this.alerts.SUCCESS);
        } catch (error: any) {
          console.log(error);
          this.isLoading = false;
          // if (error.error.errorDetails.error.methodName === "captcha error") {
          if (error.status === 200) {
            console.log('captcha error');
            this.invalidCaptcha = this.alerts.CAPTCHA;
          }
          this.toastService.showWarn(this.alerts.ERROR);
        }
      });
    } catch (error) {
      this.isLoading = false;
      this.toastService.showWarn(this.alerts.ERROR);
      console.log(error);
    }
  }

}
