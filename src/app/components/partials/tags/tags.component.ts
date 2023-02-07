import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/models/tag';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  tags: Tag[] = []
   constructor(private foodService: FoodService,
               private router: Router,
               ) {
   }

   ngOnInit() {
     this.tags = this.foodService.getAllTags();
   }

   searchTag(tagTerm: string) {
    this.router.navigateByUrl('/tag/' + tagTerm)
   }
}
