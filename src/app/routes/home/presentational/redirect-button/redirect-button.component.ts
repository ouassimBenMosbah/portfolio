import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-redirect-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedirectButtonComponent {
  public url = input.required<string>();
  public backgroundColor = input<string>('unset');
}
