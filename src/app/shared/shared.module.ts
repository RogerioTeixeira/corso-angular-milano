import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { CardPersonComponent } from './card-person/card-person.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [DatatableComponent,CardPersonComponent, PaginatorComponent],
  exports:[DatatableComponent, CardPersonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
