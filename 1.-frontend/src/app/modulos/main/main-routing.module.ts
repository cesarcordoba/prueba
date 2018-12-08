import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Importamos los componentes que se usarán en las rutas
 */
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ContactoComponent } from './contacto/contacto.component';

// import { UsuarioComponent } from './usuario/usuario.component';


const main_routers: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'proyectos',
				component: ProyectosComponent
			},
			{
				path: 'nosotros',
				component: NosotrosComponent
			},
			{
				path: 'preguntas',
				component: PreguntasComponent
			},
			{
				path: 'contacto',
				component: ContactoComponent
			}
    ]
  }
];

@NgModule({
	imports: [
		RouterModule.forChild(main_routers),
		CommonModule,
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class MainRoutingModule { }
