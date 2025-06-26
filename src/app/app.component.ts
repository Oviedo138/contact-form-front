import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
import { RouterListenersService } from './services/router-listeners/router-listeners.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cancun-center-front';
  activeLang = 'es';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private translate: TranslateService,
    private routerListenerService: RouterListenersService
  ) {
    let sub = this.router.events.subscribe(async (event: any) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;
        await this.setInitialLanguageFromRoute(url);
        sub.unsubscribe();
      }
    });
    this.routerListenerService.setRouterEventListener();
  }

  setInitialLanguageFromRoute(url: string) {
    let segments = this.routerListenerService.transformRouteFromUnsplited(url);
    if (segments.length == 0) return;
    if (segments[0] != 'es' && segments[0] != 'en') {
      this.translate.use('es');
      return;
    }
    if (segments[0] == 'es') {
      this.translate.use('es');
    } else if (segments[0] == 'en') {
      this.translate.use('en');
    }
  }
}
