import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Output() userSelected = new EventEmitter<any>();
  @Output() addAdmin = new EventEmitter<any>();
  @Output() removeAdmin = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser() {
    this.userSelected.emit(this.user);
  }

  addAdminPrivileges() {
    this.addAdmin.emit(this.user);
  }

  removeAdminPrivileges() {
    this.removeAdmin.emit(this.user);
  }

}
