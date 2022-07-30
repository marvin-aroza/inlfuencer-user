import { Injectable } from '@angular/core';
//Required modules
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

//Environment
import { environment } from 'src/environments/environment';

//rxjs library functions
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private http: HttpClient) {}

  // get Influencer list
  getInfluencerList() {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http
      .get<any>(`${environment.apiUrl}influencer`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
}
