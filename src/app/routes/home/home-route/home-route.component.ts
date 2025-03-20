import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RedirectButtonComponent } from '../presentational/redirect-button/redirect-button.component';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrl: './home-route.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RedirectButtonComponent],
})
export default class HomeRouteComponent {}
