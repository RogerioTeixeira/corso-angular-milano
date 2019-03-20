import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { PaginatorService } from 'src/app/core/services/paginator.service';
import { PageData } from 'src/app/models/page-data';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  private _totalItems: number;
  @Input()
  set totalItems(value) {

    this._totalItems = value;
     if (this.pager) {
       this.setPage(this.pager.currentPage)
    } 

  }

  get totalItems() {
    return this._totalItems
  }

  @Input() pageFirst: number = 1;
  @Input() pageRows: number = 5;

  @Output() onChangePage: EventEmitter<any> = new EventEmitter();
  currentPage: number = 0;
  pager: PageData;

  constructor(public pagination: PaginatorService) { }

  ngOnInit() {
    this.setPage(1);
    setTimeout(() => {
     
    })

  }

  setPage(page: number) {
    this.pager = this.pagination.getPager(this.totalItems, page, this.pageRows)
    this.onChangePage.emit(this.pager);
  }

}
