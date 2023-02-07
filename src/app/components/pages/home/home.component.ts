import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService,
              private activatedRoute: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if(params['tag']) {
        console.log(params['tag'])
        this.foods = this.foodService.getAllFoodByTags(params['tag'])
      } else {
        this.foods = this.foodService.getAll();
      }
    })
  }

}
