import { Component, OnInit } from '@angular/core';
import { Observable ,Subject} from 'rxjs';
import{ debounceTime , distinctUntilChanged , switchMap} from 'rxjs/operators'


import { PkSpace } from '../pkSpace';
import { ParkingService } from '../parking-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  pkLots$:Observable<PkSpace[]>;
  private searchTerms=new Subject<number>();
  constructor(private parkingService:ParkingService) { }


 search(id: number) :void{
  	this.searchTerms.next(id);
  }

  ngOnInit() :void{

  	this.pkLots$=this.searchTerms.pipe(
  		debounceTime(300),

  		distinctUntilChanged(),

  		switchMap((id:number) => this.parkingService.searchPkLots(id)
  		)
  		)
  		
  }
}
