import { Component, OnInit, NgModule } from '@angular/core';
import { MdCardModule, MdInputModule } from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@NgModule({
  imports: [MdCardModule, MdInputModule],
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
