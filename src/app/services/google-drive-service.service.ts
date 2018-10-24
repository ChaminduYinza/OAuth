import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class driveService {
  private readonly API_URL: string = 'https://www.googleapis.com/drive/v3/files';

  constructor(private httpClient: HttpClient) {
  }

  public getDriveFiles(authtoken: string): Observable<any> {
    return this.httpClient.get(this.API_URL, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${authtoken}`
      })
    });
  }
}
