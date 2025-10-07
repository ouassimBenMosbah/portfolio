import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPreviewComponent {
  public title = input.required<string>();

  public description = input.required<string>();

  public projectSrc = input.required<string>();

  public demoSrc = input<string>();

  public previewSrc = input<string>();

  public imgAlt = computed(() => `Screen du projet ${this.title()}`);

  public blurTarget(event: MouseEvent): void {
    (event.target as HTMLElement).blur();
  }
}
