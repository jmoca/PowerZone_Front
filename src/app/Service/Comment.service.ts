import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Models/Comment';
import { CommentDetails } from '../Models/CommentDetails';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private apiUrl = `${environment.apiUrl}/post`;

    constructor(private http: HttpClient) {}

    private getHeaders(token: string): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`,
        });
    }

    getCommentsByPostId(token: string, postId: number): Observable<CommentDetails[]> {
        return this.http.get<CommentDetails[]>(`${this.apiUrl}/${postId}/comments`, {
            headers: this.getHeaders(token)
        });
    }

    createComment(token: string, postId: number, commentContent: string): Observable<Comment> {
        const comment = { postId, content: commentContent };
        return this.http.post<Comment>(`${this.apiUrl}/create`, comment, { headers: this.getHeaders(token) });
    }

    deleteComment(token: string, comment: Comment): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/delete`, { body: comment, headers: this.getHeaders(token) });
    }
}
