import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-1',
  standalone: true,
  imports: [],
  templateUrl: './header-1.component.html',
  styleUrl: './header-1.component.scss'
})
export class Header1Component {
  @Input()
  text!: string;
}
