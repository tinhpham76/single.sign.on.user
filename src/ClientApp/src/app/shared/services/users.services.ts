import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserServices extends BaseService {
    private _sharedHeaders = new HttpHeaders();

    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');

    }

    update(id: string, entity: any) {
        return this.http.put(`${environment.api_url}/api/users/${id}`,
            JSON.stringify(entity),
            { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    changePassword(id: string, entity: any) {
        return this.http.put(`${environment.api_url}/api/users/${id}/change-password`
            , JSON.stringify(entity),
            { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    getDetail(id) {
        return this.http.get<any>(`${environment.api_url}/api/users/${id}`,
            { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(environment.api_url + '/api/users/' + id,
            { headers: this._sharedHeaders })
            .pipe(catchError(this.handleError));
    }
}