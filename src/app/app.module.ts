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


import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
// import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';
// import { MapsComponent } from './components/maps/maps.component';
// import { FoundationCancunCenterComponent } from './components/home/foundation-cancun-center/foundation-cancun-center.component';
// import { Section360Component } from './components/home/section-360/section-360.component';
// import { SectionApcComponent } from './components/home/section-apc/section-apc.component';
// import { CaribeMexicanoComponent } from './components/home/caribe-mexicano/caribe-mexicano.component';
// import { HotelsHomeComponent } from './components/home/hotels-home/hotels-home.component';
// import { ServicesHomeComponent } from './components/home/services-home/services-home.component';
// import { CelebrationsHomeComponent } from './components/home/celebrations-home/celebrations-home.component';
// import { ExtraordinaryHomeComponent } from './components/home/extraordinary-home/extraordinary-home.component';
// import { CancunPageComponent } from './pages/cancun-page/cancun-page.component';
// import { BannerCancunComponent } from './components/cancun/banner-cancun/banner-cancun.component';
// import { InfrastructureCancunComponent } from './components/cancun/infrastructure-cancun/infrastructure-cancun.component';
// import { TourismCancunComponent } from './components/cancun/tourism-cancun/tourism-cancun.component';
// import { ConnectivityCancunComponent } from './components/cancun/connectivity-cancun/connectivity-cancun.component';
// import { VisitingCancunComponent } from './components/cancun/visiting-cancun/visiting-cancun.component';
// import { ApcPageComponent } from './pages/apc-page/apc-page.component';
// import { BannerApcComponent } from './components/apc/banner-apc/banner-apc.component';
// import { PartnershipApcComponent } from './components/apc/partnership-apc/partnership-apc.component';
// import { OurPartnersApcComponent } from './components/apc/our-partners-apc/our-partners-apc.component';
// import { FoundationPageComponent } from './pages/foundation-page/foundation-page.component';
// import { BannerFoundComponent } from './components/foundation/banner-found/banner-found.component';
// import { BannersInfoFoundComponent } from './components/foundation/banners-info-found/banners-info-found.component';
// import { ActivitiesFoundComponent } from './components/foundation/activities-found/activities-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BannerContactComponent } from './components/contact/banner-contact/banner-contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
// import { QuoteModalFormComponent } from './components/quote-modal-form/quote-modal-form.component';
// import { OurSpacesHomeComponent } from './components/home/our-spaces-home/our-spaces-home.component';
// import { SpacesCapacitiesComponent } from './components/facilities/spaces-capacities/spaces-capacities.component';
// import { FacilitiesPageComponent } from './pages/facilities-page/facilities-page.component';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    NavBarComponent,
    FooterComponent,
    // BannerHomeComponent,
    // MapsComponent,
    // FoundationCancunCenterComponent,
    // Section360Component,
    // SectionApcComponent,
    // CaribeMexicanoComponent,
    // HotelsHomeComponent,
    // ServicesHomeComponent,
    // CelebrationsHomeComponent,
    // ExtraordinaryHomeComponent,
    // CancunPageComponent,
    // BannerCancunComponent,
    // InfrastructureCancunComponent,
    // TourismCancunComponent,
    // ConnectivityCancunComponent,
    // VisitingCancunComponent,
    // ApcPageComponent,
    // BannerApcComponent,
    // PartnershipApcComponent,
    // OurPartnersApcComponent,
    // FoundationPageComponent,
    // BannerFoundComponent,
    // BannersInfoFoundComponent,
    // ActivitiesFoundComponent,
    ContactPageComponent,
    BannerContactComponent,
    ContactFormComponent,
    // QuoteModalFormComponent,
    // OurSpacesHomeComponent,
    // SpacesCapacitiesComponent,
    // FacilitiesPageComponent,
    // PrivacyPolicyPageComponent
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
      useValue: "6LcmDUEqAAAAAKWHikSRgxroRYy3uZ8wcmRV5Ul5",
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
