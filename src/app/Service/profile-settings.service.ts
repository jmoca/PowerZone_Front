import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileSetting} from "../Models/ProfileSetting";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProfileSettingsService {
    private apiUrl = `${environment.apiUrl}`;

    constructor(private httpClient: HttpClient) { }

    getData(token: string): Observable<ProfileSetting> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<ProfileSetting>(`${this.apiUrl}/profile/getData`, {}, { headers });
    }

    updateProfile(token: string, profile: ProfileSetting): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post(`${this.apiUrl}/profile/updateData`, profile, { headers });
    }

    getProfileById(id: string) {
        return this.httpClient.get<ProfileSetting>(`${this.apiUrl}/profile/${id}`);
    }
    followUser(token: string, userId: number, followUserId: number): Observable<string> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<string>(`${this.apiUrl}/profile/${userId}/follow/${followUserId}`, {}, { headers });
    }

    unfollowUser(token: string, userId: number, unfollowUserId: number): Observable<string> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<string>(`${this.apiUrl}/profile/${userId}/unfollow/${unfollowUserId}`, {}, { headers });
    }

    isFollowing(token: string, userId: number, followUserId: number): Observable<boolean> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.get<boolean>(`${this.apiUrl}/profile/${userId}/isFollowing/${followUserId}`, { headers });
    }


}
