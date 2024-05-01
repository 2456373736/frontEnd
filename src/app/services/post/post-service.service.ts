import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_ALL_POSTS);
  }

  addPost(Obj: any) {
    return this.http.post(constants.API_END_POINT + constants.METHODS.ADD_POST, Obj);
  }

  getPostById(id: number) {
    return this.http.get(constants.API_END_POINT + constants.METHODS.GET_POST_BY_ID + id);
  }
}
