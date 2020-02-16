import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, distinct } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllClasses(email: string, password: string) {
    return this.http.get(`http://localhost:3002/api/table/?email=${email}&password=${password}`);
  }
}
