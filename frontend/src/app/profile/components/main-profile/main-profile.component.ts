import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/auth/models/user.interface';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {
  @Input() user: User;
  @Output() profileUpdate = new EventEmitter<any>();

  updateProfileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.updateProfileForm = new FormGroup({
      login: new FormControl(this.user.login),
    })
  }
  
  onProfileUpdate() {
    this.profileUpdate.emit(this.updateProfileForm.value)
  }
}
