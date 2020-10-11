import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  userControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
  ]);

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.router.navigateByUrl('');
  }
}
