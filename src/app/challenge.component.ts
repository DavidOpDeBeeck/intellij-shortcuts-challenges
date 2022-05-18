import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-challenge',
  template: `
    <section class="flex space-x-2">
      <span class="font-bold uppercase">Challenge #{{number}}</span>
      <span class="flex-1"><ng-content></ng-content></span>
    </section>
    <section *ngIf="showAnswer && shortcut" class="my-4">
      <code class="p-2 uppercase bg-gray-300 rounded-md">{{shortcut}}</code>
    </section>
  `
})
export class ChallengeComponent {
  @Input()
  number: number = 0;
  @Input()
  shortcut: string = '';
  showAnswer = false;
}
