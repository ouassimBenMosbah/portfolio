import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ContactFormComponent,
  IContactFormRawValue,
} from '../features/contact-form/contact-form.component';
import { ContactFormEndpointService } from '../features/services/contact-form-endpoint/contact-form-endpoint/contact-form-endpoint.service';
import { ContactInformationComponent } from '../presentational/contact-information/contact-information.component';

@Component({
  selector: 'app-contact-route',
  templateUrl: './contact-route.component.html',
  styleUrl: './contact-route.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ContactInformationComponent, ContactFormComponent],
})
export default class ContactRouteComponent {
  private contactFormEndpointService = inject(ContactFormEndpointService);

  public onSubmit(value: IContactFormRawValue): void {
    this.contactFormEndpointService.send(value).subscribe({
      next: () => alert('Le formulaire a été envoyé avec succès'),
      error: (error: Error) =>
        alert(
          `Erreur "${error.message}". Veuillez renvoyer le formulaire ou utiliser directement le mail indiqué.`
        ),
    });
  }
}
