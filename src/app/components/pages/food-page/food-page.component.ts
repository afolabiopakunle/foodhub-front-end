import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {

  food!: Food;

  constructor(private activatedRoute: ActivatedRoute,
              private foodService: FoodService,
              private cartService: CartService,
              private router: Router,
              ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.foodService.getFoodById(params['id']).subscribe(food => {
        this.food = food;
      });
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnDestroy() {

  }
}
