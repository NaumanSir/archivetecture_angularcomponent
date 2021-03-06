import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _httpClient: HttpClient;
  constructor(_httpClient: HttpClient) {
    this._httpClient = _httpClient;
  }

  getAll() {
    return this._httpClient.get("/arch");
  }

  create(arch) {
    return this._httpClient.post("/arch", arch);
  }

}