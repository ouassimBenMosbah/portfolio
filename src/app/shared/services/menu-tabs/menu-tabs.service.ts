import { Injectable } from '@angular/core';
import { IMenuTab } from 'src/app/interfaces/menu-tab';

@Injectable({
  providedIn: 'root',
})
export class MenuTabsService {
  public buildMenu(): IMenuTab[] {
    return [
      this.buildTab('Home', ''),
      this.buildTab('CV', 'resume'),
      this.buildTab('Projects', 'projects'),
      this.buildTab('Contact', 'contact'),
    ];
  }

  private buildTab(label: string, link: string): IMenuTab {
    const baseUrl = '/';
    return { label, link: baseUrl.concat(link) };
  }
}
