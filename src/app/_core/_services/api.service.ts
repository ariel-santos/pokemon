import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint, params?) {
    return this.http.get(`${environment.apiBase}${endpoint}`, { params });
  }

  post(endpoint, params) {
    return this.http.post(`${environment.apiBase}${endpoint}`, params);
  }

  put(endpoint, params) {
    return this.http.put(`${environment.apiBase}${endpoint}`, params);
  }

  delete(endpoint, params) {
    return this.http.delete(`${environment.apiBase}${endpoint}`, params);
  }
}
