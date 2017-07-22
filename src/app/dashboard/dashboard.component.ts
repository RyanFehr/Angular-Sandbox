import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('flipState', [
      state('back', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('front', style({
        transform: 'rotateY(0)'
      })),
      transition('back => front', animate('500ms ease-out')),
      transition('front => back', animate('500ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  tileOneDirection: string = 'front';
  tileTwoDirection: string = 'front';
  tileThreeDirection: string = 'front';
  tileFourDirection: string = 'front';

  constructor() { }

  ngOnInit() {
    document.body.style.background = 'url(../../assets/dashboard.jpg)';
  }

  ngOnDestroy() {
    document.body.style.background = "none";
  }

  flipTile(tile: number) {
    switch (tile) {
      case 1: {
        this.tileOneDirection = (this.tileOneDirection == 'front') ? 'back' : 'front';
        break;
      }
      case 2: {
        this.tileTwoDirection = (this.tileTwoDirection == 'front') ? 'back' : 'front';
        break;
      }
      case 3: {
        this.tileThreeDirection = (this.tileThreeDirection == 'front') ? 'back' : 'front';
        break;
      }
      case 4: {
        this.tileFourDirection = (this.tileFourDirection == 'front') ? 'back' : 'front';
        break;
      }
    }
  }
}
