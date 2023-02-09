import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/models/tag';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  tags: Tag[] = []
   constructor(private foodService: FoodService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               ) {
   }

   ngOnInit() {
     this.foodService.getAllTags().subscribe(tags => this.tags = tags);
     this.activatedRoute.params.subscribe(params => {
       const tag = params['tag'];
       if(tag) this.router.navigateByUrl('/tags/' + tag)
     })
   }

   searchTag(tagTerm: string) {
    this.router.navigateByUrl('/tags/' + tagTerm);
   }
}
