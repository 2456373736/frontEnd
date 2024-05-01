import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constant/constant';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_USERS);
  }

  createUser(Obj: User) {
    return this.http.post(constants.API_END_POINT + constants.METHODS.CREATE_USER, Obj);
  }
}
