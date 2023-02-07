import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { HttpClient } from '@angular/common/http';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTags(tag: string): Food[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.map(tag => tag.toLowerCase()).includes(tag.toLowerCase()));
  }

  getFoodById(id: string): Food {
    return this.getAll().find(food => food.id === id) ?? new Food();
  }

}
