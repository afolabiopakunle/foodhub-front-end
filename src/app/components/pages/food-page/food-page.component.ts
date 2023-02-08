import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {

  food!: Food;

  constructor(private activatedRoute: ActivatedRoute,
              private foodService: FoodService,
              ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.food = this.foodService.getFoodById(params['id']);
    })
  }
}
