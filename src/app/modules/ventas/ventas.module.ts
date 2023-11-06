import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { VerVentasComponent } from './pages/ver-ventas/ver-ventas.component';
import { VerPedidoByIdComponent } from './pages/ver-pedido-by-id/ver-pedido-by-id.component'
import { VentasTableComponent } from './components/ventas-table/ventas-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
    declarations: [
        VerVentasComponent,
        VentasTableComponent,
        VerPedidoByIdComponent
    ],
    imports: [
        CommonModule,
        VentasRoutingModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        TabMenuModule,
        AvatarModule,
        TagModule,
        AccordionModule
    ]
})
export class VentasModule { }
