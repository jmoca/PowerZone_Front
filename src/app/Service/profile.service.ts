import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileSetting } from '../Models/ProfileSetting';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileSettingsService {
    private apiUrl = `${environment.apiUrl}/profile`;

    constructor(private httpClient: HttpClient) { }

    private getHeaders(token: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

    getData(token: string): Observable<ProfileSetting> {
        return this.httpClient.post<ProfileSetting>(`${this.apiUrl}/getData`, {}, { headers: this.getHeaders(token) });
    }

    updateProfile(token: string, profile: ProfileSetting): Observable<any> {
        return this.httpClient.post(`${this.apiUrl}/updateData`, profile, { headers: this.getHeaders(token) });
    }

    getProfileById(id: string): Observable<ProfileSetting> {
        return this.httpClient.get<ProfileSetting>(`${this.apiUrl}/${id}`);
    }

    followUser(token: string, userId: number, followUserId: number): Observable<string> {
        return this.httpClient.post<string>(`${this.apiUrl}/${userId}/follow/${followUserId}`, {}, { headers: this.getHeaders(token) });
    }

    unfollowUser(token: string, userId: number, unfollowUserId: number): Observable<string> {
        return this.httpClient.post<string>(`${this.apiUrl}/${userId}/unfollow/${unfollowUserId}`, {}, { headers: this.getHeaders(token) });
    }

    isFollowing(token: string, userId: number, followUserId: number): Observable<boolean> {
        return this.httpClient.get<boolean>(`${this.apiUrl}/${userId}/isFollowing/${followUserId}`, { headers: this.getHeaders(token) });
    }
}
