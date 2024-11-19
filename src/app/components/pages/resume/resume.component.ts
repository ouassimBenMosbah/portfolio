import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PdfViewerComponent } from '../../presentational/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PdfViewerComponent],
})
export default class ResumeComponent {
  public resumeSrc = input.required<string>();
}
