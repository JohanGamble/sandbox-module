import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableViewComponent } from './components/data-table-view/data-table-view.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'datatable', component: DataTableViewComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
