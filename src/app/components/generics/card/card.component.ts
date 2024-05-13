import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [ParagraphComponent]
})
export class CardComponent {
  productName: string = 'JOJOBA OIL 25 ML';
  productPrice: string = '15,00 €';
}
