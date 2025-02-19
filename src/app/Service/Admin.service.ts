import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Report } from 'src/app/Models/Report';
import { ProfileWarningBan } from '../Models/ProfileWarningBan';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private apiUrl = `${environment.apiUrl}/admin`;
    private token: string = sessionStorage.getItem('token') || '';

    constructor(private http: HttpClient) {}

    getReports(offset: number) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.get<Report[]>(`${this.apiUrl}?offset=${offset}`, { headers });
    }

    getUserWarnings(offset: number) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.get<ProfileWarningBan[]>(`${this.apiUrl}/userWarning?offset=${offset}`, { headers });
    }

    getUserBanned(offset: number) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.get<ProfileWarningBan[]>(`${this.apiUrl}/userBanned?offset=${offset}`, { headers });
    }

    putWarning(id: number, state: string) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        let message = {
            id: id,
            state: state
        };
        console.log(message);
        return this.http.put(`${this.apiUrl}/report`, message, { headers });
    }

    verifyAdmin(): Observable<boolean> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.get<boolean>(`${this.apiUrl}/isAdmin`, { headers });
    }
}
