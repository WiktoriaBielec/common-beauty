import { Component } from '@angular/core';
import { Header1Component } from "../generics/header-1/header-1.component";
import { Header2Component } from "../generics/header-2/header-2.component";

@Component({
    selector: 'app-our-vision',
    standalone: true,
    templateUrl: './our-vision.component.html',
    styleUrl: './our-vision.component.scss',
    imports: [Header1Component, Header2Component]
})
export class OurVisionComponent {
   header: string = 'DISCOVER YOUR INNER GLOW';
   secondHeader: string = 'Our Vision';
}
