import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../../services/user';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-table',
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css'
})
export class UserTable implements OnInit {
  user: User[] = [];

  constructor(private userService: UserService) {
  }
  ngOnInit(): void{
    this.userService.getUser().subscribe({
      next: (data) => this.user = data,
      error: (err) => console.log(err),
    })
  }

}
