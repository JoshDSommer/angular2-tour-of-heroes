import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
	selector: 'my-hero-detail',
	template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: (with {{dog.name}})</label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
	inputs: ['hero', 'dog']
})
export class HeroDetailComponent {
	public hero: Hero;
}
