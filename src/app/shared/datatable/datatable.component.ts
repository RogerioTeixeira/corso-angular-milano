import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableCol } from 'src/app/models/datatable-col';
import { PageData } from 'src/app/models/page-data';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  private pageData: PageData;
  private _data:any[]
  @Input() cols: DataTableCol[];
  @Input() 
  set data(value:any){
    this._data = value
    if(this.pageData){
      this.renderList();
    }
  }

  get data(){
    return this._data;
  }

  @Input() activateDelete: boolean;
  @Input() maxRows: number = 5;
  public selectIndex:number = -1;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>()
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>()

 

  renderedList: any[];;

  constructor() { }

  ngOnInit() {
    this.renderedList = this.data.slice(0, this.maxRows + 1)
  }

  delete(val: any) {
    this.onDelete.emit(val);
  }

  changePage(event: PageData) {
    
    this.pageData = event;
    this.renderList();
    this.resetCurrentSelection();

  }

  renderList() {
    this.renderedList = this.data.slice(this.pageData.startIndex, this.pageData.endIndex + 1);
  }

  selectRow(index:number){
    this.selectIndex = index == this.selectIndex ? -1 : index;
    this.onSelect.emit(index >= 0 ? this.renderedList[index] : null);
  }

  private resetCurrentSelection(){
    this.selectIndex = -1;
  }

}
