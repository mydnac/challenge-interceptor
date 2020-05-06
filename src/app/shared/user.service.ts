import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getAllUser(): Observable<object>{
    return this.httpClient.get<object>(this.BASE_URL);
  }
}

