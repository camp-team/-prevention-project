import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserLoginList } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  isTodayAnswer = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private datePipe: DatePipe
  ) {}

  private transDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  getTodayLogin() {
    const date: string = this.transDate();
    const day: number = Number(date.substr(8, 2));
    this.userService
      .getTodayLogin(this.authService.uid)
      .subscribe((res: UserLoginList) => {
        this.isTodayAnswer = res[day]?.date ? true : false;
      });
  }

  ngOnInit(): void {
    this.getTodayLogin();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
