import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*componentes  */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/factura/facturas/facturas.component';
import { DespachoFacturaComponent } from './components/factura/despacho-factura/despacho-factura.component';
import { FacturasDespachoComponent } from './components/factura/facturas-despacho/facturas-despacho.component';
import { NotasCreditoComponent } from "./components/credito/notas-credito/notas-credito.component";

/* definir rutas */

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'Despacho', component: DespachoFacturaComponent},
    {path: 'facturas', component: FacturasComponent},
    {path: 'Despacho-Facturas', component: FacturasDespachoComponent},
    {path: 'Notas-Credito', component: NotasCreditoComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);