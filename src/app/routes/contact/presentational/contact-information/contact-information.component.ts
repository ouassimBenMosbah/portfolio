import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-information',
  standalone: true,
  imports: [],
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInformationComponent {}
