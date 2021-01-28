import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  envUrl = `${environment.apiUrl}api/projects/CheckUserAccess`

  constructor(private http: HttpClient) { }
  checkUserAccess() {
    this.http.get(this.envUrl, {}).subscribe(res => {
      console.log(res);
    });
  }
}
