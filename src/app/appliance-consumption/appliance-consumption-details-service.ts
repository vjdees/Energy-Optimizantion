import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApplianceConsumptionService {
    private Url = 'https://qcw3nh67n8.execute-api.us-east-2.amazonaws.com/dev/customers/appliances/1'

    constructor(private http: HttpClient) {

    }
    
    getapplianceconsumptiondetails(): Observable<any> {
        return this.http.get<any>(this.Url).pipe(
            tap(data =>JSON.stringify(data)),
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