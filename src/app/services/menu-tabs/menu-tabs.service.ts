import { Injectable } from '@angular/core';
import { MenuTab } from 'src/app/interfaces/menu-tab';

@Injectable({
  providedIn: 'root',
})
export class MenuTabsService {
  public buildMenu(): MenuTab[] {
    return [
      this.buildTab('Home', ''),
      this.buildTab('Resume', 'resume'),
      this.buildTab('Projects', 'projects'),
      this.buildTab('Contact', 'contact'),
    ];
  }

  private buildTab(label: string, link: string): MenuTab {
    const baseUrl = '/';
    return { label, link: baseUrl.concat(link) };
  }
}
