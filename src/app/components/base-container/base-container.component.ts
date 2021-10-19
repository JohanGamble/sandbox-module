import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item-module';
import { moduleStateCheck, resetModuleState } from '../../extern-processes/menu-item-selection';

import { MenuItemViewService } from 'src/app/services/web-interface-service';
import { NotificationService } from 'src/app/services/notification-service';
import { NavigationNotificationService } from 'src/app/services/route-change-service';

@Component({
  selector: 'app-base-container',
  templateUrl: './base-container.component.html',
  styleUrls: ['./base-container.component.sass'],
})
export class BaseContainerComponent implements OnInit {
  dataModules: MenuItem[] = [];
  headerComponent: string = "";

  constructor(
    private menuItemViewService: MenuItemViewService,
    private notificationService: NotificationService,
    private navigationNotificationService: NavigationNotificationService) { }

  ngOnInit(): void {
    this.dataModules = this.menuItemViewService.getMenuItemInformation();
  }

  processModuleStateValues(mc: MenuItem): void {
    this.dataModules = moduleStateCheck(mc, this.dataModules);
    this.headerComponent = mc.header;
    if (this.navigationNotificationService.changeOfRoute(mc)) {
      this.dataModules = resetModuleState(this.dataModules);
    }
    this.announcementModuleState();
  }

  announcementModuleState(): void {
    this.notificationService.announcementMade(this.dataModules)
  }
}