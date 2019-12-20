import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserConsumptionService {
    private Url = 'https://o7xcqrt1c2.execute-api.us-east-1.amazonaws.com/test/customer/consumption/1'

    constructor(private http: HttpClient) {

    }
    
    getuserconsumption(): Observable<any> {
        return this.http.get<any>(this.Url).pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}