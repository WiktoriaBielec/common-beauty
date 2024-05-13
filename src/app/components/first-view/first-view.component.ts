import { Component } from '@angular/core';
import { TransparentButtonComponent } from "../generics/transparent-button/transparent-button.component";

@Component({
    selector: 'app-first-view',
    standalone: true,
    templateUrl: './first-view.component.html',
    styleUrl: './first-view.component.scss',
    imports: [TransparentButtonComponent]
})
export class FirstViewComponent {
  buttonText = 'Find out more'
}
