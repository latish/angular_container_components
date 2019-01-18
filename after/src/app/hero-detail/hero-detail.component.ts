import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero }         from '../hero';

@Component({
  selector: 'app-hero-detail-ui',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() goBack= new EventEmitter();
  @Output() save= new EventEmitter<Hero>();

  goBackClicked(): void {
    this.goBack.emit();
  }

 saveClicked(): void {
   this.save.emit(this.hero);
  }
}
