import { Component, OnInit , Input } from '@angular/core';
import { PkSpace } from '../pkSpace';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ParkingService } from '../parking-service.service';

@Component({
  selector: 'app-empty-parking-detail',
  templateUrl: './empty-parking-detail.component.html',
  styleUrls: ['./empty-parking-detail.component.css']
})
export class EmptyParkingDetailComponent implements OnInit {

  @Input() pkSpace:PkSpace;
  getpkSpace():void{;
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.parkingService.getpkSpace(id)
  		.subscribe(pkSpace => this.pkSpace = pkSpace);
  };
  save():void{
  	this.parkingService.updatepkSpace(this.pkSpace)
  	.subscribe(() => this.goBack());
  };
  goBack():void{
  	this.location.back();
  };  
  constructor(private route:ActivatedRoute,private parkingService:ParkingService,private location:Location) { }

  ngOnInit() {
  	this.getpkSpace();
  }

}
