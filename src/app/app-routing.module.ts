import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { CancunPageComponent } from './pages/cancun-page/cancun-page.component';
// import { ApcPageComponent } from './pages/apc-page/apc-page.component';
// import { FoundationPageComponent } from './pages/foundation-page/foundation-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
// import { FacilitiesPageComponent } from './pages/facilities-page/facilities-page.component';
// import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';

const routes: Routes = [
  {
    path: ':lang', children: [
      // { path: 'home', component: HomeComponent },
      // { path: 'facilities', component: FacilitiesPageComponent },
      // { path: 'cancun', component: CancunPageComponent },
      // { path: 'alianza', component: ApcPageComponent },
      // { path: 'foundation', component: FoundationPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
      { path: '**', redirectTo: 'contact', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
