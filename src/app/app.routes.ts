import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { DestacableComponent } from './destacable/destacable.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ChatComponent } from './chat/chat.component';
import { SoporteComponent } from './soporte/soporte.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },
  { path: 'tienda', component: TiendaComponent },
  { path: 'destacable', component: DestacableComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'comunidad', component: ComunidadComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'appcomponent', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
            
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
