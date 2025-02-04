import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPreviewComponent {
  public title = input.required<string>();

  public description = input.required<string>();

  public projectSrc = input.required<string>();

  public previewSrc = input.required<string>();

  public imgAlt = computed(() => `Screen du projet ${this.title()}`);
}
