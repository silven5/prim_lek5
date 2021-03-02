import { DishesService } from './../shared/dishes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-make-dish',
  templateUrl: './make-dish.page.html',
  styleUrls: ['./make-dish.page.scss'],
})
export class MakeDishPage implements OnInit {
  dishingForm: FormGroup;
  constructor(private dishService: DishesService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.dishingForm = this.fb.group({
      name: [''],
      ingradients: [''],

    })
  }
  formSubmit() {
    if (!this.dishingForm.valid) {
      return false;
    } else {
      this.dishService.createDish(this.dishingForm.value).then(res => {
        console.log(res)
        this.dishingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
