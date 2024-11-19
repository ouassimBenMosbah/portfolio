import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RedirectButtonComponent } from '../../presentational/redirect-button/redirect-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RedirectButtonComponent],
})
export default class HomeComponent {}
