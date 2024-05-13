import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  standalone: true,
  imports: [],
  templateUrl: './transparent-button.component.html',
  styleUrl: './transparent-button.component.scss'
})
export class TransparentButtonComponent {
  @Input() btnText: string = 'Click me';
}
