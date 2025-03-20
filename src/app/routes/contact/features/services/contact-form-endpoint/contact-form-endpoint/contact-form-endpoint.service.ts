import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IContactFormRawValue } from '../../../contact-form/contact-form.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactFormEndpointService {
  private http = inject(HttpClient);
  private endpoint = 'https://formcarry.com/s/scpVq67jrLm';

  public send(value: IContactFormRawValue): Observable<unknown | Error> {
    return this.http.post(this.endpoint, value).pipe(take(1));
  }
}
