import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grey-button',
  standalone: true,
  imports: [],
  templateUrl: './grey-button.component.html',
  styleUrl: './grey-button.component.scss'
})
export class GreyButtonComponent {
  @Input() btnText: string = 'Click me';
}
