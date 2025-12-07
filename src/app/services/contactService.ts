import { inject, Injectable, signal } from '@angular/core';
import { ContactModel } from '../models/Contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private http = inject(HttpClient);
  private _contacts = signal<ContactModel[]>([]);
  contacts = this._contacts.asReadonly();
  addContact(firstName: string, phoneNumber: string, joke?: string) {
    this.http.get<{ value: string }>('https://api.chucknorris.io/jokes/random').subscribe({
      next: (response) => {
        const newContact: ContactModel = {
          firstName: firstName,
          phoneNumber: phoneNumber,
          joke: joke ?? response.value,
        };
        this._contacts.update((contacts) => [...contacts, newContact]);
      },
      error: (error) => {
        const newContact: ContactModel = {
          firstName: firstName,
          phoneNumber: phoneNumber,
          joke: joke ?? 'Chuck Norris joke could not be fetched.',
        };
        this._contacts.update((contacts) => [...contacts, newContact]);
      },
    });
  }
  deleteContact(index: number) {
    this._contacts.update((contacts) => contacts.filter((_, i) => i !== index));
  }
}
