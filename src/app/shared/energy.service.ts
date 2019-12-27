import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EnergyService {
    date =new Date();
    today = this.date.toISOString();
    private Url = "https://api.carbonintensity.org.uk/regional/intensity/"+this.today+"/fw48h/postcode/RG10";

    constructor(private http: HttpClient) {
        
    }

    getintensity(): Observable<any> {
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