import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';
import { IndexComponent } from './pages/index/index.component';
import { PremiosComponent } from './pages/premios/premios.component';
import { ClasificacionComponent } from './pages/clasificacion/clasificacion.component';
import { PreguntaComponent } from './pages/pregunta/pregunta.component';

const routes: Routes = [  
  {
    path: '', 
    component: IndexComponent
  },
  {
    path: 'home', 
    component: DashbordComponent
  },
  {
    path: 'desafios', 
    component: DesafiosComponent
  },
  {
    path: 'premios', 
    component: PremiosComponent
  },
  {
    path: 'clasificacion', 
    component: ClasificacionComponent
  },
  {
    path: 'preguntas', 
    component: PreguntaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
