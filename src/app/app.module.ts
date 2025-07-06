import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimengModule } from './extra-module/primeng.module';
import { MaterialModule } from './extra-module/material.module';
import { ToastModule } from 'primeng/toast';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service } from 'ng-recaptcha';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BannerContactComponent } from './components/contact/banner-contact/banner-contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ContactPageComponent,
    BannerContactComponent,
    ContactFormComponent,
    PrivacyPolicyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SwiperModule,
    PrimengModule,
    MaterialModule,
    ToastModule,
    NgxFastMarqueeModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    MessageService,
    ConfirmationService,
    [provideHttpClient(withFetch())],
    provideAnimationsAsync(),
    ReCaptchaV3Service,
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6LcP1G0rAAAAACnbXXtOvC0beQR1vX54Qz6aDbdx",
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
