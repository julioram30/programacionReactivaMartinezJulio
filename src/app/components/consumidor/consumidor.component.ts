import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit,OnDestroy {

  tableDataSource$: Observable<MatTableDataSource<Data>>;

  constructor(private serviceData:DataService) { 
    this.tableDataSource$ = serviceData.getData().pipe(tap((odata) => console.log(odata)),
                                                  map((odata) => new MatTableDataSource<Data>(odata)));
  }
  
  ngOnInit() {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
