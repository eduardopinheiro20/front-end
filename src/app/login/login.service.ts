import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  realizaLogin(email: string, senha: string): Observable<string> {
    return this.http.post(
      `${environment.apiUrl}/academico/login`,
      { email, senha },
      { responseType: 'text' }
    );
  }
}
