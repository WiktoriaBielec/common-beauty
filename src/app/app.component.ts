import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstViewComponent } from "./components/first-view/first-view.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FirstViewComponent]
})
export class AppComponent {
  title = 'common-beauty';
}
