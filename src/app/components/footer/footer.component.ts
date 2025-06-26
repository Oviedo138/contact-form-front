import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public translateJson: any = {};
  public routers: any = [];
  public currentYear = new Date().getFullYear();

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.onLangChange();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.onLangChange();
    });
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

  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }

}
