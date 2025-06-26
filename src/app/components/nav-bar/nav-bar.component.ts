import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { RouterListenersService } from '../../services/router-listeners/router-listeners.service';
// import { QuoteModalFormComponent } from '../quote-modal-form/quote-modal-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact/contact-form/contact-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  private scrollListener: boolean = true;
  public scrollFlag: string = '';
  public url: string = '';
  public paddingScrollHeader = '';
  public activeLang = 'es';

  public sidebarVisible: boolean = false;
  public translateJson: any = {};
  public routers: any = [];


  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private translate: TranslateService,
    private listenerService: RouterListenersService,
    private dialog: MatDialog,
  ) {
    this.activeLang = this.translate.currentLang;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLang = this.translate.currentLang;
        setTimeout(() => {
          this.activeLang = this.translate.currentLang;
        }, 200);
      }
    });
  }

  ngOnInit(): void {
    this.onLangChange();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.onLangChange();
    });
    this.scrollListener = true;
    this.renderer.listen('window', 'scroll', (e) => {
      if (this.scrollListener) {
        this.scrollFlag =
          e.target.scrollingElement.scrollTop > 75 ? 'scroll' : '';
        this.paddingScrollHeader = '0px';
      }
    });
    // this.openModal();
  }

  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }

  changeLang(lang: string) {
    this.activeLang = lang;
    this.translate.use(this.activeLang);
    this.listenerService.navigateToSameRoute(lang);
    this.onLangChange();
    return;
  }

  onLangChange() {
    this.routers = [];
    this.translate.get(['NAVBAR']).subscribe((data: any) => {
      this.translateJson = data;
      let routs = this.translateJson['NAVBAR'].ROUTES;
      this.addToArray(routs, this.routers);
    });
  }

  addToArray(object: any, array: any[]) {
    for (let clave in object) {
      array.push(object[clave]);
    }
  }

  openModal() {
    this.dialog.open(ContactFormComponent, {
      disableClose: false,
      hasBackdrop: true,
      autoFocus: false,
      width: '700px',
      // height: '530px',
      height: 'auto',
      maxHeight: '95vh',
      maxWidth: '95vw',
    });
  }

}
