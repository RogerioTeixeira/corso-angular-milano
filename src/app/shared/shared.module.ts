import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { CardPersonComponent } from './card-person/card-person.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { MioPipePipe } from './mio-pipe.pipe';

@NgModule({
  declarations: [DatatableComponent,CardPersonComponent, PaginatorComponent, PickListComponent, MioPipePipe],
  exports:[DatatableComponent, CardPersonComponent , PickListComponent , MioPipePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
