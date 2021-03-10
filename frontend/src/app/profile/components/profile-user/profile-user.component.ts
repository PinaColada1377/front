import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
