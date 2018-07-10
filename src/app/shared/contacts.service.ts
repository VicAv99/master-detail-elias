import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://elias-page.herokuapp.com/contacts';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.http.get<Contact[]>(BASE_URL)
      .pipe(map(res => res));
  }

  create(contact: Contact) {
    return this.http.post<Contact>(BASE_URL, contact)
      .pipe(map(res => res));
  }

  update(contact: Contact) {
    return this.http.patch<Contact>(`${BASE_URL}/${contact.id}`, contact)
      .pipe(map(res => res));
  }

  delete(id: number) {
    return this.http.delete<Contact>(`${BASE_URL}/${id}`)
      .pipe(map(res => res));
  }

}
