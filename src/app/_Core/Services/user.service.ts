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
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  // register user
  //add user
  addUser(formData: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.http
      .post<any>(`${environment.apiUrl}auth/register`, formData, {
        headers: headers,
      })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
}
