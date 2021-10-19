import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CSSClass } from 'src/app/extern-processes/menu-item-selection';
import { MenuItem } from 'src/app/models/menu-item-module';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass'],
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem = new MenuItem(0, "", CSSClass.MODULE_CLOSE, "");
  @Output() onModuleClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  moduleTransition: string = "";

  constructor(private notificationService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.notificationUpdate();
  }

  eventModuleClick(): void {
    this.onModuleClick.emit(this.menuItem);
    this.router.navigateByUrl(this.menuItem.componentLink);
  }

  notificationUpdate(): void {
    this.notificationService.announcementStatus$.subscribe((res) => {
      for (let indexedModule = 0; indexedModule < res.length; indexedModule++) {
        if (res[indexedModule].id === this.menuItem.id) {
          this.moduleTransition = res[indexedModule].moduleTransition
        }
      }
    });
  }
}