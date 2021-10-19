import { Component, OnInit, Input } from '@angular/core';
import { ModuleTabSetting } from 'src/app/models/setting-module';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.sass']
})
export class TeamInfoComponent implements OnInit, ModuleTabSetting {
  @Input() incomingData: any;
  constructor() { }

  ngOnInit(): void {
  }
}
