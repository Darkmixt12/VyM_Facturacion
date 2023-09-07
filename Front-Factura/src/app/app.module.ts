import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'; /* formularios */
import { FormsModule } from '@angular/forms'; /* formularios  --save rxjs-compat si no funciona el RXJS*/ 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /*angular material */


/* ANGULAR MATERIALS */
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; /* angular mterial */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';





/* Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/factura/facturas/facturas.component';
import { BorrarFacturaComponent } from './components/factura/borrar-factura/borrar-factura.component';
import { EditPersonaComponent } from './components/factura/edit-persona/edit-persona.component';
import { DespachoFacturaComponent } from './components/factura/despacho-factura/despacho-factura.component';
import { FacturasDespachoComponent } from './components/factura/facturas-despacho/facturas-despacho.component';
import { NotasCreditoComponent } from './components/credito/notas-credito/notas-credito.component';
import { EditCreditoComponent } from './components/credito/edit-credito/edit-credito.component';
import { BorrarCreditoComponent } from './components/credito/borrar-credito/borrar-credito.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacturasComponent,
    BorrarFacturaComponent,
    EditPersonaComponent,
    DespachoFacturaComponent,
    FacturasDespachoComponent,
    NotasCreditoComponent,
    EditCreditoComponent,
    BorrarCreditoComponent,


  ],
  imports: [
    BrowserModule,
    routing,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,/* modulo de tabla */
    MatPaginatorModule,/* modulo para cambiar pagina */
    MatSortModule,/* modo para ordenar*/
    MatFormFieldModule,/* libreria para buscar */
    MatInputModule,/* libreria para buscar*/
    MatIconModule, /* libreria para iconos*/
    MatButtonModule, /* libreria para botones */
    MatTooltipModule, /* libreria para comentario al boton*/
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule


  ],
  providers: [appRoutingProviders,
  {
    provide: MAT_DATE_LOCALE, useValue : 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
