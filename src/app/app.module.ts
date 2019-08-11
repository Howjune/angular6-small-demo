import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './parking-log-data';

import { AppComponent } from './app.component';
import { OccupiedParkingComponent } from './occupied-parking/occupied-parking.component';
import { EmptyParkingComponent } from './empty-parking/empty-parking.component';
import { AppRoutingModule } from './/app-routing.module';
import { OccupiedParkingDetailComponent } from './occupied-parking-detail/occupied-parking-detail.component';
import { EmptyParkingDetailComponent } from './empty-parking-detail/empty-parking-detail.component';
import { MessageComponent } from './message/message.component';
import { PkLotsComponent } from './pk-lots/pk-lots.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataSortComponent } from './data-sort/data-sort.component';
/*
----------- zorro ui 模块----------*/

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DataTableComponent } from './data-table/data-table.component';
/*
-----------------------*/


@NgModule({
  declarations: [
    AppComponent,
    OccupiedParkingComponent,
    EmptyParkingComponent,
    OccupiedParkingDetailComponent,
    EmptyParkingDetailComponent,
    MessageComponent,
    PkLotsComponent,
    SearchBoxComponent,
    DataSortComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule { }
