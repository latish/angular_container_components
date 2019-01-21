import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.container.component.html',
  styleUrls: [ ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailContainerComponent {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero$ = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

 save(hero:Hero): void {
    this.heroService.updateHero(hero)
      .subscribe(() => this.goBack());
  }
}
