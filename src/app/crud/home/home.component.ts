import { Component, OnInit } from '@angular/core';

import { CrudService } from '../crud.service';
import { Product } from '../product';
import { AuthenticationService } from 'src/app/_services';
import { ActivatedRoute, Router} from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products: Product[] = [];
  displayedColumns =
      [ 'no', 'name','description', 'price', 'action'];
  dataSource = this.products;
  dialog: any;
  


  constructor(public crudService: CrudService,
              private router: Router,
              private authenticationService: AuthenticationService ) { }

  ngOnInit():void {
    console.log('inside init');

    this.crudService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;

    })
     
  }
 


  delete(id:number):void{
    this.crudService.delete(id).subscribe((data:any)=>{
      this.ngOnInit();
      console.log(data);
    })
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
}

}
