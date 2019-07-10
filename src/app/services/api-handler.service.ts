import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  apiKey = 'X1-ZWz1h8dtcewykr_634pb';

  getNeighboorhoodData(city: string, state: string) {
    return new Promise((resolve) => {
      this.http.get('https://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + this.apiKey + '&state=' + state + '&city=' + city + '&childtype=zip')
      .subscribe((resp) => {
        console.log(resp)
        resolve(resp)
      })
    })
  }

  

  constructor(private http: HttpClient) { }
}
