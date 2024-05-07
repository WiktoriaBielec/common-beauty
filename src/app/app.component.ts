import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstViewComponent } from "./components/first-view/first-view.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FirstViewComponent, NavigationComponent, AboutUsComponent]
})
export class AppComponent {
  title = 'common-beauty';
}
