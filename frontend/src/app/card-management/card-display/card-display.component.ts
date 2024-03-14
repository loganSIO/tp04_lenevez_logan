import { Component } from '@angular/core';
import { CardManagementModule } from '../card-management.module';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [CardManagementModule],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {

}
