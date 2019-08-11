import { Component, OnInit ,Input} from '@angular/core';
import { PkSpace } from '../pkSpace';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ParkingService } from '../parking-service.service';

@Component({
  selector: 'app-occupied-parking-detail',
  templateUrl: './occupied-parking-detail.component.html',
  styleUrls: ['./occupied-parking-detail.component.css']
})
export class OccupiedParkingDetailComponent implements OnInit {
  nowTime=new Date().toTimeString();
  @Input() pkSpace:PkSpace;
  constructor(private route:ActivatedRoute,private parkingService:ParkingService,private location:Location) { }

  ngOnInit() {
  	this.getpkSpace();
  }
/*  getNowTime():void{
    console.log(1)
    setInterval(function(){
         console.log(2)
      this.nowTime=new Date().toTimeString();
    },1000)

  }*/
  save():void{

  	this.parkingService.updatepkSpace(this.pkSpace)
  	.subscribe(() => this.goBack());
  };
  getpkSpace():void{
  	const id= +this.route.snapshot.paramMap.get('id');
  	this.parkingService.getpkSpace(id)
  		.subscribe(pkSpace => this.pkSpace = pkSpace);
  }
  goBack():void{
  	this.location.back();
  }
}
