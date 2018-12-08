import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router, private auth: AuthService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let hayUsuario: boolean;
		this.auth.obtenerUsuario().asObservable().subscribe(user => {
			user ? hayUsuario = true : (hayUsuario = false);
		}).closed

		if (!hayUsuario) {
			this.router.navigate(['/login'])
			return hayUsuario;
		}

		return hayUsuario
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		// console.log('Estoy checandoo si tienes permisos we e.e');
		// let tienePermisos: boolean;
		// this.auth.obtenerUsuario().asObservable().subscribe(user => user.getTipo() == 'admin' ? tienePermisos = true : tienePermisos = false).closed
		// return tienePermisos;
		return true
	}

}
