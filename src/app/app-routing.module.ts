import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TwoYearComponent } from './two-year/two-year.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  { path: 'year_one', component: TableComponent},
  { path: 'year_two', component: TwoYearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
