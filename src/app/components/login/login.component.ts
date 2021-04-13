import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localStoraService:LocalStorageService) { }

  ngOnInit(): void {
    this.localStoraService.setItem("token","Some token info")
  }

}