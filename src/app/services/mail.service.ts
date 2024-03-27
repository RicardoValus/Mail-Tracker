// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MailService {
//   findObject(objectCode: any) {
//     throw new Error('Method not implemented.');
//   }
//   http: any;

//   constructor(httpClient: HttpClient, httpHeaders: HttpHeaders) { }

//   locateObject(objectCode: string){
//     let url = 'https://proxyapp.correios.com.br/v1/sro-rastro/' + objectCode;

//     var header = {
//       headers: new HttpHeaders()
//       .set('Content-Type', `application/json`)
//     }

//     return this.http.get(url, header).toPromise();
//   }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  locateObject(objectCode: string) {
    const url = 'https://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/' + objectCode;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.get(url, { headers }).toPromise();
  }
}

