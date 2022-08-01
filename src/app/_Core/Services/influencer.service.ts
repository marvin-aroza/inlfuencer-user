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

  //get user by id
  getInfluencerById(id: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .get<any>(`${environment.apiUrl}influencer/${id}`, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          result.data.status = result.data.isActive ? 'Active': 'Inactive'
          result.data.profImage = result.data.profImage ? result.data.profImage: 'assets/assets/img/undraw_profile.svg'
          return result;
        })
      );
  }

  // request collab
  requestCollab(body: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .post<any>(`${environment.apiUrl}collab/request-collab`, body, {
        headers: headers,
      });
  }
}
