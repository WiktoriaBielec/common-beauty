import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstViewComponent } from "./components/first-view/first-view.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { OurVisionComponent } from "./components/our-vision/our-vision.component";
import { CardComponent } from "./components/generics/card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FirstViewComponent, NavigationComponent, AboutUsComponent, OurVisionComponent, CardComponent]
})
export class AppComponent {
  title = 'common-beauty';
  buttonText: string = 'Want to know more?';
}
