import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { ModuleItem, ModuleTabSetting } from 'src/app/models/setting-module';
import { SettingViewDirective } from 'src/app/models/setting-dynamic-component';
import { TabViewService } from 'src/app/services/web-interface-service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  @ViewChild(SettingViewDirective, { static: true }) setView!: SettingViewDirective;
  items: ModuleItem[] = [];

  interval: number | undefined;
  styleDefinitionForSelected = {
    border: '1px solid #ddd',
    borderBottom: '1px solid #fff',
    position: 'relative',
    top: '2px',
    padding: '10px',
    transition: 'borderBottom 2s'
  }
  styleDefinitionForUnSelected = {
    border: '',
    borderBottom: '1px solid #ddd',
    position: 'relative',
    top: '2px',
    padding: '10px',
    transition: 'borderBottom 2s'
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private tabViewService: TabViewService) { }

  ngOnInit(): void {
    this.items = this.tabViewService.getTabInformation();
    this.selectedTab(0);
    this.loadComponent(0);
  }

  onTabChange(ev: any) {
    this.selectedTab(ev.index);
    this.loadComponent(ev.index);
  }

  loadComponent(index: number) {
    const compItem = this.items[index];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(compItem.component);
    if (this.setView) {
      const viewContainerRef = this.setView.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<ModuleTabSetting>(componentFactory);
      componentRef.instance.incomingData = compItem.data;
    }
  }

  selectedTab(index: number): void {
    this.items[index].data.header.style = this.styleDefinitionForSelected;
    this.unselectedTab(index);
  }
  unselectedTab(index: number): void {
    for (let indexedTab = 0; indexedTab < this.items.length; indexedTab++) {
      if (this.items[indexedTab].data.tabNumber != index) {
        this.items[indexedTab].data.header.style = this.styleDefinitionForUnSelected;
      }
    }
  }
}