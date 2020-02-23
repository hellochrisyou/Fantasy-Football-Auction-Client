import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../../shared/const/url.const';
import { TOKENS } from '../../shared/const/api-key';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuctionLeague, SnakeLeague } from 'src/app/shared/interface/model.interface';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'localhost:4200/live-auction',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly AUCTIONURL = APIURL.NFLAUCTIONPLAYERS;
  private readonly APIKEY = TOKENS.APIKEY;

  constructor(private http: HttpClient,
  ) { }


  public get(url: string): Observable<any> {
    return this.http.get(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  public post(url: string, body: AuctionLeague | SnakeLeague): Observable<any> {
    return this.http.post(url, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // public post(url: string, bodyParam): Observable<any> {
  //   console.log('hello uel', url);
  //   return this.http.post(url, bodyParam, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  // public put(url: string, bodyParam): Observable<any> {
  //   return this.http.put(url, bodyParam, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  // public delete(url: string, bodyParam: string): Observable<any> {
  //   this.bodyString.jsonString = bodyParam;
  //   return this.http.post(url, this.bodyString, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // public clearStocks(url: string): Observable<any> {
  //   return this.http.delete(url, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // private extractData(res: Response) {
  //   const body = res;
  //   return body || {};
  // }

  // Error Console  
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    return throwError(
      'Something bad happened.');
  };
}
