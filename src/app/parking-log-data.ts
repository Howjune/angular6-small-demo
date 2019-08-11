import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService{


	createDb(){

		const pkLots=[
		{
			id:1,
			S_date:new Date(2018,7,1,20,20,20),
			E_date:new Date(2018,7,1,22,22,22),
			Fee:10,
		},

		{
			id:2,
			S_date:new Date(2018,7,1,20,20,20),
			E_date:new Date(2018,7,1,22,22,22),
			Fee:10,
		},
		
		{
			id:3,
			S_date:new Date(2018,7,1,20,20,20),
			E_date:new Date(2018,7,1,22,22,22),
			Fee:10,
		},
		
		{
			id:4,
			S_date:new Date(2018,7,1,20,20,20),
			E_date:null,
			Fee:10,
		},
		
		{
			id:6,
			S_date:new Date(2018,7,1,20,20,20),
			E_date:null,
			Fee:10,
		}
		];
		return {pkLots}; 
	}
}