import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';  
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { PkSpace } from './pkSpace';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
@Injectable({
  providedIn: 'root'
})

export class ParkingService {
	private pkLotsUrl= 'api/pkLots';
	private handleError<T>(operation ='operation', result?: T){
	  	return (error: any):Observable<T> =>{
	  		console.error(error);
	  		this.log(`${operation} failed:${error.message}`);
	  		return of(result as T);
	  	}
	  };
  private log(message:string){
  	this.messageService.add('ParkingService:' + message);
  }

  getpkLots() : Observable<PkSpace[]>{
  	return this.http.get<PkSpace[]> (this.pkLotsUrl)
  	.pipe(
  			tap(heroes => this.log(`fetch oc_parking data`)),
  			catchError(this.handleError('fetch oc_parking data',[]))
  		)
  };

  getpkSpace(id:number):Observable <PkSpace> {

    const url=`${this.pkLotsUrl}/${id}`;

  this.messageService.add(`ParkingService fetch pklot:id=${id}`);
  
    return this.http.get<PkSpace>(url)
    .pipe(
        tap(_ => this.log(`fetch pklot id=${id}`)),
        catchError(this.handleError<PkSpace>(` getPklot id=${id} `))
      )
  }
  updatepkSpace(pkSpace:PkSpace):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put(this.pkLotsUrl , pkSpace , httpOptions).pipe(
        tap(_ => this.log(`update pkSpace id=${pkSpace.id}`)),
        catchError(this.handleError<any>('updatePklot'))
      )

  }
 addPkLots(pkSpace:PkSpace) : Observable<PkSpace>{
    console.log(pkSpace);
    return this.http.post<PkSpace>(this.pkLotsUrl ,pkSpace , httpOptions).pipe(
    tap((pkSpace:PkSpace) => this.log(`added pkSpace w/ id=${pkSpace.id}`)),
    catchError(this.handleError<PkSpace>('addPkSpace'))
    )

  };
  
  deletepkSpace (pkSpace:PkSpace | number): Observable<PkSpace> {
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
    const id = typeof pkSpace === 'number' ? pkSpace : pkSpace.id;
    const url= ` ${this.pkLotsUrl}/${id} `;

    return this.http.delete<PkSpace>(url,  httpOptions).pipe(
      tap(_ => this.log(`delete pkspace id=${id}`)),
      catchError(this.handleError<PkSpace>('deletePkSpace'))
      );
  };

  searchPkLots(id:number):Observable<PkSpace[]>{
    if(!id){
      return of([]);

    }
    return this.http.get<PkSpace[]>(`api/pkLots/?id=${id}`).pipe(
      tap(_ => this.log(`found parkingLots matching "${id}"`)),
      catchError(this.handleError<PkSpace[]>(('match ParkingLots'),[]))
      );
  }
  constructor(private http:HttpClient,private messageService:MessageService,private route:ActivatedRoute) { }
}
