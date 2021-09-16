import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:number=0;

  products: Product={id:0, name:'',description:'',price:0};
  productForm!: FormGroup;

  constructor(public crudService: CrudService,
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
) { }




  ngOnInit(): void {

    this.route.queryParams.subscribe((params => {

      this.id=params.id}))
      console.log(this.id)

      this.crudService.getById(this.id).subscribe((data: Product)=>{
        console.log(data);
        this.products=data;
      })

      




    


  }
  updateForm(){
    this.crudService.update(this.id, this.products).subscribe(res => {
      console.log('Product updated!')
      window.alert('Product details updated');
      this.router.navigateByUrl('/crud/home')}
    )
   }
    
  

}
