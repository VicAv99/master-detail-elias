import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../shared/contact.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  selectedContact: Contact;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
  @Input() set contacts(value: Contact) {
    this.selectedContact = Object.assign({}, value);
  }

}
