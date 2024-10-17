import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  public contactForm: FormGroup;

  public get name() {
    return this.contactForm.get('name') as FormControl<string>;
  }

  public get email() {
    return this.contactForm.get('email') as FormControl<string>;
  }

  public get message() {
    return this.contactForm.get('message') as FormControl<string>;
  }

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(
        'Formulaire valide, envoyé avec succès',
        this.contactForm.value
      );
      return;
    }
    console.log("Le formulaire n'est pas valide");
  }
}
