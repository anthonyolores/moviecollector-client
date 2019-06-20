import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MoviecookieService {
  mc_ids:any;
  cookie_key:string = 'mc_ids';
  constructor(private cookieService: CookieService) { 
    this.updateIds();
  }

  private updateIds():void{
    if(this.hasCookie())
      this.mc_ids = JSON.parse(this.cookieService.get(this.cookie_key));
    else
      this.mc_ids = [];
  }

  clear():void{
    this.cookieService.delete(this.cookie_key);
  }

  hasCookie():boolean{
    return this.cookieService.check(this.cookie_key);
  }

  getIds():string{
    this.updateIds();
    return this.mc_ids;
  }

  exists(id:string):boolean{
    this.updateIds();
    return (this.mc_ids.indexOf(id) != -1);
  }

  add(id:string):void{
    this.updateIds();
    let temp_ids = this.mc_ids;
    if(temp_ids.indexOf(id) == -1 && id != ""){
      temp_ids.push(id);
    }
    this.cookieService.set(this.cookie_key, JSON.stringify(temp_ids));
  }

  remove(id:string):void{
    this.updateIds();
    let temp_ids = this.mc_ids;
    let index = this.mc_ids.indexOf(id);
    if(index != -1)
      temp_ids.splice(index, 1);
    this.cookieService.set(this.cookie_key, JSON.stringify(temp_ids));
  }

  addBulk(ids:string):void{
    this.cookieService.set(this.cookie_key, ids);
  };

}
