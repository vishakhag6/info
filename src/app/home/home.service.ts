import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
    BASEURL: any = 'http://localhost:3000/';
    constructor(private http: HttpClient) { }

    jobListingData(): Observable<Response> {
        return this.http.get(`${this.BASEURL}data`)
            .pipe(map((response: any) => response));
    }

    jobListingServiceByPlace(): Observable<Response> {
        return this.http.get(`${this.BASEURL}joblisting`)
            .pipe(map((response: any) => response));
    }

    jobListingServiceByPreference(): Observable<Response> {
        return this.http.get(`${this.BASEURL}joblistingByDesc`)
            .pipe(map((response: any) => response));
    }

    jobListingSearchPlaceService(userloc): Observable<Response> {
        return this.http.get(`${this.BASEURL}joblisting?location=${userloc}`)
            .pipe(map((response: any) => response));
    }
}