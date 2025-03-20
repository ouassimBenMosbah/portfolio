import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PdfViewerComponent } from '../presentational/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-resume-route',
  templateUrl: './resume-route.component.html',
  styleUrl: './resume-route.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PdfViewerComponent],
})
export default class ResumeRouteComponent {
  public resumeSrc = input.required<string>();
}
