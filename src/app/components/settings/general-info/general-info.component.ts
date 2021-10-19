import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModuleTabSetting } from 'src/app/models/setting-module';
import { ConfigService } from 'src/app/services/client.request.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.sass']
})
export class GeneralInfoComponent implements OnInit, OnDestroy, ModuleTabSetting {
  incomingData: any;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.incomingResponse();
  }

  incomingResponse(): any {
    this.configService.getRequest().subscribe((data: any) => {
      for (let indexedConfig = 0; indexedConfig < data.body.length; indexedConfig++) {
        this.incomingData.data.push({
          title: data.body[indexedConfig].name,
          id: data.body[indexedConfig]._id,
          mongoData: data.body[indexedConfig]
        })
      }
    }, (e: Error) => {
      return e;
    }, () => { return "Request completed" });
  }

  ngOnDestroy() {
    this.incomingData.data = []
  }
}
