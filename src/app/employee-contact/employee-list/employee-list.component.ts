import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../shared/contact.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() contacts: Contact[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
