import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  foodsObservable!: Observable<Food[]>;

  constructor(private foodService: FoodService,
              private activatedRoute: ActivatedRoute,
              ) {
    this.activatedRoute.params.subscribe(params => {
      if(params['searchTerm']) {
        this.foodService.getAllFoodsBySearchTerm(params['searchTerm']).subscribe(foods => {
          this.foods = foods;
        });
      } else if(params['tag']) {
        this.foodService.getAllFoodByTags(params['tag']).subscribe(foods => {
          this.foods = foods
        })
      } else {
        this.foodService.getAll().subscribe(foods => {
          this.foods = foods;
        });
      }
    })
  }

  ngOnInit() {
  }

}
