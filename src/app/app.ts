import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserTable} from './component/user-table/user-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeesList');
}
