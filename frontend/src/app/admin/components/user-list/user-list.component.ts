import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: any[];
  @Output() userSelected = new EventEmitter<any>();
  @Output() addAdmin = new EventEmitter<any>();
  @Output() removeAdmin = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  onUserSelected(user: any) {
    this.userSelected.emit(user)
  }

  onAddAdmin(user: any) {
    this.addAdmin.emit(user);
  }

  onRemoveAdmin(user: any) {
    this.removeAdmin.emit(user);
  }

  trackByFn(index: any) {
    return index;
  }
}
