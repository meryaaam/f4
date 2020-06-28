import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  
  roles: string[] = [];
  isLoggedIn = false;
  // expectedRole : string[] = [] ;

  constructor(
    private token: TokenService ,
    private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
      this.roles = this.token.getUser().roles;
      const expectedRole = route.data.expectedRole;



      if ( (this.token.getToken()) && (this.roles.includes(expectedRole)) )
      { return true ; }
      else if (  (this.token.getToken())  &&  (!this.roles.includes(expectedRole) ) ) {
          this.router.navigate(['home']) ;
          return false ;
            }
      // else  (!(this.token.getToken() )){
      // this.router.navigate(['login']) ;
      //     // tslint:disable-next-line: align
      //     return false ; }
        }}




