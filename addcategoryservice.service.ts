import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddcategoryserviceService {

  constructor(private _http:HttpClient) { }

  //add category
  public addCategory(category:any)
  {
    return this._http.post(`${baseUrl}/category/add`,category);
  }

  //get all category
  public getallcategory()
  {
   return this._http.get(`${baseUrl}/category/all`);
  }

}
