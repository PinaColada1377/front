import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogOut } from 'src/app/auth/store/auth.actions';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: Store ) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.store.dispatch(new LogOut)
  }
}
