import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfViewerComponent {
  public src = input.required<string>();
  public safeSrc = computed(() =>
    this.domSanitizer.bypassSecurityTrustResourceUrl(this.src() + '#toolbar=1')
  );

  public width = input<string>('100%');

  public height = input<string>('100%');

  private domSanitizer = inject(DomSanitizer);
}
