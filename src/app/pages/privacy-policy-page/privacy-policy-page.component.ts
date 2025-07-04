import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {

  public activeLang = 'es';

  constructor(
    public meta: Meta,
    public titleService: Title,
    private router: Router,
    private translate: TranslateService,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLang = this.translate.currentLang;
        setTimeout(async () => {
          this.activeLang = await this.translate.currentLang;
        }, 400);
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.activeLang === 'es' ? 'Aviso de Privacidad | Cancun Center' : 'Privacy Notice | Cancun Center')
  }

}
