import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }

  setItem(key:string, value:string){
    localStorage.setItem(key,value)
  }

  getItem(key: string){
    return localStorage.getItem(key)
  }
}
