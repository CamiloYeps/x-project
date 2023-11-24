import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TicketsRoutingModule } from './tickets-routing.module';
import { VerTicketsComponent } from './pages/ver-tickets/ver-tickets.component';

import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { VerDetalleComponent } from './pages/ver-detalle/ver-detalle.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TicketsTableComponent } from './components/tickets-table/tickets-table.component';
import { AvatarModule } from 'primeng/avatar';
import { TagsColorsService } from './services/tags-colors.service';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
	declarations: [
		VerTicketsComponent,
        VerDetalleComponent,
        TicketsTableComponent,
	],
	imports: [
		CommonModule,
		TicketsRoutingModule,
		TableModule,
		TagModule,
		ButtonModule,
		TagModule,
		SplitButtonModule,
        InputTextModule,
        AvatarModule,
        DropdownModule
	],
    providers: [TagsColorsService]
})
export class TicketsModule { }
