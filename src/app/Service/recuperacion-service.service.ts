import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RecuperacionServiceService {
    private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

    sendEmail(email: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/${this.apiUrl}/auth/forgot-password?email=${email}`, null);
    }

    sendNewPassword(code: string, newPassword:string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/${this.apiUrl}/auth/reset-password?code=${code}&newPassword=${newPassword}`, null);
    }
}
