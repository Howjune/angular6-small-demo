import { Component, OnInit } from '@angular/core';
import { PkSpace } from '../pkSpace';
import { ParkingService } from '../parking-service.service'; 
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

pkLots:PkSpace[];
getPkLots():void{

		this.parkingService.getpkLots()
    .subscribe(pkLots => this.pkLots = pkLots);
  
  }

searchValue = '';
  filterAddressArray = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  searchAddress = [];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;
/*  data = [
    {
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name   : 'Jim Red',
      age    : 32,
      address: 'London No. 2 Lake Park'
    }
  ];*/
  displayData = [ ...this.pkLots];

  sort(sortName: string, value: boolean): void {
/*    this.sortName = sortName;
    this.sortValue = value;
    for (const key in this.sortMap) {
      this.sortMap[ key ] = (key === sortName ? value : null);
    }
    this.search();*/
  }

  filterAddressChange(value: string[]): void {/*
    this.searchAddress = value;
    this.search();*/
  }

  search(): void {
 /*   const filterFunc = (item) => {
      return (this.searchAddress.length ? this.searchAddress.some(address => item.address.indexOf(address) !== -1) : true) &&
        (item.name.indexOf(this.searchValue) !== -1);
    };
    const data = this.pkLots.filter(item => filterFunc(item));
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  */}
  constructor(private parkingService:ParkingService) { }

  ngOnInit() {
  	this.getPkLots();
  }

}
