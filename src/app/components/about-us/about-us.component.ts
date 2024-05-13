import { Component } from '@angular/core';
import { Header1Component } from "../generics/header-1/header-1.component";
import { ParagraphComponent } from "../generics/paragraph/paragraph.component";
import { GreyButtonComponent } from "../generics/grey-button/grey-button.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    imports: [Header1Component, ParagraphComponent, GreyButtonComponent]
})
export class AboutUsComponent {
  firstHeader: string = 'DISCOVER YOUR INNER GLOW';
  secondHeader: string = 'Our Philosophy';

  firstParagraph: string = `Join the Common Beauty movement and discover your glow from within. 
  With  our inclusive range of products tailored to all skin tones and types,  
  you can embrace your individuality 
  while indulging in luxurious,  eco-conscious formulas.`;
  secondParagraph: string = `At Common Beauty, we believe that beauty is not about conforming 
  to  unrealistic standards but about embracing your unique features and  
  expressing yourself authentically. 
  Our philosophy revolves around  simplicity, efficacy, and inclusivity.`;

  firstBtn: string = 'Read more';
  secondBtn: string = 'Want to know more?';
}
