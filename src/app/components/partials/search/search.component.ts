import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              ) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   params['searchTerm'] ? this.searchTerm = params['searchTerm'] : null
    // })
  }

  search(term: string) {
    if(term)
      this.router.navigateByUrl('/search/' + term);
  }
}
