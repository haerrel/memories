import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private endpoint = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<any[]>(this.endpoint + 'api/v1/card');
  }

  unlockCard(id: number, secret: string) {
    return this.http.post(this.endpoint + 'api/v1/card/' + id + '/unlock', {secret});
  }
}
