import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private toastrService: ToastrService,
    private localStorageService: LocalStorageService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.localStorageService.getItem("token")) {
      return true
    } else {
      this.toastrService.error("Yetki hatası", "Bu alana gidemezsiniz!")
      return false;
    }

  }

}
