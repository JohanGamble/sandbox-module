import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from 'src/app/services/client.request.service';

@Component({
  selector: 'app-data-table-view',
  templateUrl: './data-table-view.component.html',
  styleUrls: ['./data-table-view.component.sass']
})

export class DataTableViewComponent implements OnInit {

  button_text: string = "";
  input_value: string = "";
  incomingData: ModuleDataTable[] = [];

  displayedColumns: string[] = ['host', 'name', 'deletion'];
  dataSource: MatTableDataSource<ModuleDataTable> = new MatTableDataSource;
  
  constructor(private configService: ConfigService) { }
  ngOnInit(): void {
    this.incomingResponse();
    this.button_text = "Delete Entry";
  }
  incomingResponse(): any {
    this.configService.getRequest().subscribe((data: any) => {
      for (let indexedConfig = 0; indexedConfig < data.body.length; indexedConfig++) {
        this.incomingData.push({
          id: data.body[indexedConfig].host.host_id,
          host: data.body[indexedConfig].host.host_thumbnail_url,
          name: data.body[indexedConfig].host.host_name
        })
      }
      this.dataSource = new MatTableDataSource(this.incomingData);
    }, (e: Error) => {
      return e;
    }, () => { return "Request completed" });
  }
  emittedClick(ev: ModuleDataTable) {
    this.dataSource.data = this.dataSource.data.filter(element => element.id !== ev.id)
  }
  emittedValue(value: string) {
    this.input_value = value;
    this.applyFilter(this.input_value);
  }
  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}

export interface ModuleDataTable {
  id: string;
  host: string;
  name: string;
}