import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Programmed Directive
import { SettingViewDirective } from './models/setting-dynamic-component';

// Programmed Components
import { BaseContainerComponent } from './components/base-container/base-container.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { DataTableViewComponent } from './components/data-table-view/data-table-view.component';
import { InputComponent } from './components/elements/input/input.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GeneralInfoComponent } from './components/settings/general-info/general-info.component';
import { TeamInfoComponent } from './components/settings/team-info/team-info.component';

// Services
import { ConfigService } from './services/client.request.service';
import { NotificationService } from './services/notification-service';
import { MenuItemViewService, TabViewService } from './services/web-interface-service';
import { NavigationNotificationService } from './services/route-change-service';

// Materials UI
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNg
import { TabViewModule } from 'primeng/tabview';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseContainerComponent,
    SettingViewDirective,
    SettingsComponent,
    ButtonComponent,
    InputComponent,
    MenuItemComponent,
    DataTableViewComponent,
    GeneralInfoComponent,
    TeamInfoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,

    // PrimeNg
    TabViewModule,
  ],
  providers: [
    NotificationService,
    ConfigService,
    MenuItemViewService,
    NavigationNotificationService,
    TabViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
