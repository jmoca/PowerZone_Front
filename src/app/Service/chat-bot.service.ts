import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ChatBotService {
    private apiUrl = `${environment.apiUrl}`;
    constructor(private httpClient: HttpClient) {}

  sendMessage(message: string, token: string | null): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post<any>(`${this.apiUrl}/chatBot/chat`, { text: message }, { headers });
  }
}
