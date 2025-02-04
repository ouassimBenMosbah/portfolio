import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { MenuTabsService } from '../../services/menu-tabs/menu-tabs.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class MenuComponent {
  public name = 'Ouassim BEN MOSBAH';
  public job = 'Développeur front-end';

  public tabs = inject(MenuTabsService).buildMenu();
  public homeTab = computed(() =>
    this.tabs.length ? this.tabs[0] : { link: '/', label: '' }
  );

  public activeLink$ = inject(Router).events.pipe(
    filter(
      (navigationEvent): navigationEvent is NavigationEnd =>
        navigationEvent instanceof NavigationEnd
    ),
    tap(console.log),
    map(({ url }) => url)
  );
}
