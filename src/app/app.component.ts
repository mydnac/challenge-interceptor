import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'challenge-interceptor';
  users: any;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUser();
  }


  getUser(){
    this.userService.getAllUser().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    }
      );
  }
}
