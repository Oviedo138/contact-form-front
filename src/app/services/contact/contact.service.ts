import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public CONTACT_URI: string = `${environment.URL_API}/mail/contact-cancun-center`;
  public QUOTE_URI: string = `${environment.URL_API}/mail/quote-cancun-center`;

  constructor(
    private http: HttpClient
  ) { }

  async sendContact(data: any) {
    try {
      let response = await this.http.post(this.CONTACT_URI, { data }).toPromise();
      return response;
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  async sendQuote(data: any) {
    try {
      let response = await this.http.post(this.QUOTE_URI, { data }).toPromise();
      return response;
    } catch (error) {
      console.log(error);
      throw error
    }
  }
}
