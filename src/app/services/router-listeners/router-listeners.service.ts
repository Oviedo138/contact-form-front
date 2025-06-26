import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class RouterListenersService {
  constructor(
    public router: Router,
    private translate: TranslateService
  ) { }

  setRouterEventListener() {

    this.router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        var containsLang = this.checkIfUrlContainsLanguage(routerEvent.url);
        if (containsLang == false) {
          var currentLang = this.translate.currentLang || 'es';
          this.router.navigate([currentLang, ...this.transformRouteFromUnsplited(routerEvent.url)], { queryParamsHandling: 'preserve', replaceUrl: true })
        }
      }
    })
  }

  navigateToSameRoute(newLang: string) {
    let routes = this.transformRouteFromUnsplited(this.router.url);
    if (routes[0] == 'en' || routes[0] == 'es') {
      routes.shift()
    }
    this.router.navigate([newLang, ...routes], { queryParamsHandling: 'preserve' })
  }

  transformRouteFromUnsplited(url: string) {
    let segments = url.split('/');
    if (segments[0] == '') segments.shift()
    if (segments.length == 0) return [];
    var x = segments.map(value => {
      if (value.includes('?') == false) return value;
      let parts = value.split('?')
      return parts[0];
    });
    return x;
  }

  checkIfUrlContainsLanguage(url: string) {
    let segments = url.split('/');
    if (segments.length == 0) return false;
    if (segments[0] == '') segments.shift();
    if (segments[0] == 'es' || segments[0] == 'en') return true;
    return false;
  }
}
