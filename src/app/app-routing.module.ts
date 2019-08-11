import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { OccupiedParkingComponent } from './occupied-parking/occupied-parking.component';
import { OccupiedParkingDetailComponent } from './occupied-parking-detail/occupied-parking-detail.component';
import { EmptyParkingComponent } from './empty-parking/empty-parking.component';
import { EmptyParkingDetailComponent } from './empty-parking-detail/empty-parking-detail.component';
import { PkLotsComponent } from './pk-lots/pk-lots.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes:Routes=[
	{
		path:'oc_parking',component:OccupiedParkingComponent
	},
	{
		path:'em_parking',component:EmptyParkingComponent
	},

	{
		path:'pkLots',component:PkLotsComponent
	},
	{
		path:'', redirectTo: '/pkLots' , pathMatch:'full'
	},
	{
		path:'em_parking/:id',component:EmptyParkingDetailComponent
	
	},
	{
		path:'oc_parking/:id',component:OccupiedParkingDetailComponent
	
	},
	{
		path:'dtb',component:DataTableComponent
	
	}
	];
@NgModule({

	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
