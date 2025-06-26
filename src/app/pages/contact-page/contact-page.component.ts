import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

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
    this.meta.updateTag({ property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/cancun-center.appspot.com/o/logo.png?alt=media&token=1fbabb31-bf74-4692-ac41-5f97c1eda824' });
    this.meta.updateTag({ name: 'description', content: 'Estamos aquí para ayudarte y responder a cualquier consulta que puedas tener.' });
    this.meta.updateTag({ name: 'keywords', content: 'cancun, center, hoteles, convenciones, mundial, eventos, conferencias, exposiciones' });
  }

  ngOnInit() {
    this.titleService.setTitle(this.activeLang === 'es' ? 'Envianos un Mensaje | Contact Front' : 'Send Us A Message | Contact Front')
    // this.meta.updateTag({ property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/cancun-center.appspot.com/o/logo.png?alt=media&token=1fbabb31-bf74-4692-ac41-5f97c1eda824' });
    // this.meta.updateTag({ name: 'description', content: 'Estamos aquí para ayudarte y responder a cualquier consulta que puedas tener.' });
    // this.meta.updateTag({ name: 'keywords', content: 'cancun, center, hoteles, convenciones, mundial, eventos, conferencias, exposiciones' });
  }

}
