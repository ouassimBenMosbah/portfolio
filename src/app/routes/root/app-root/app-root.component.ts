import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../../shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MenuComponent],
})
export class AppRootComponent {}
