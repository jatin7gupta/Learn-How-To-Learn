import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Blogs} from './shared/BlogInterface';

const Base_URL ='http://localhost:3000/blogs/';

const header = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class WebService {

  constructor(private _http: Http) { }
  private blog: Blogs;
  private _navItemSource = new BehaviorSubject<Blogs>(this.blog);
  navItem$ = this._navItemSource.asObservable();

  changeNav(data) {
    this._navItemSource.next(data);
  }

  getData() {
    return this._http.get(Base_URL)
      .map(res => res.json())
  }
  postData(data){
    return this._http.post(Base_URL, data, header)
      .map(res=>res.json())
  }
  updateData(data){
    return this._http.patch(Base_URL+data.id, data,header);
  }
  deleteData(data){
    return this._http.delete(Base_URL+data.id,header);
  }

}
