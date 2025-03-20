import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export type IContactFormRawValue = ReturnType<
  typeof ContactFormComponent.prototype.contactForm.getRawValue
>;

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  public formSubmit = output<IContactFormRawValue>();

  public contactForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.formSubmit.emit(this.contactForm.getRawValue());
      this.contactForm.reset(this.contactForm.getRawValue());
    }
  }
}
