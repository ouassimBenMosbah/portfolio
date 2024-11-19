import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';
import { MenuTab } from 'src/app/interfaces/menu-tab';
import { MenuTabsService } from 'src/app/services/menu-tabs/menu-tabs.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTabsModule,
  ],
})
export class MenuComponent {
  public tabs: MenuTab[] = this.menuTabsService.buildMenu();

  public activeLink$ = this.router.events.pipe(
    filter(
      (navigationEvent): navigationEvent is NavigationEnd =>
        navigationEvent instanceof NavigationEnd
    ),
    map(({ url }) => url)
  );

  constructor(
    private menuTabsService: MenuTabsService,
    private router: Router
  ) {}
}
