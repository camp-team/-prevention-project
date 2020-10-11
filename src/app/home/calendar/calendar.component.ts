import { Component, OnDestroy, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Subscription } from 'rxjs';
import { UserLoginList } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  private readonly preCalendarOption = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    theme: 'standart',
    headerToolbar: {
      left: 'prevYear prev',
      center: 'title',
      right: 'next nextYear',
    },
    events: [],
    locale: 'ja',
    dayCellContent(event) {
      event.dayNumberText = event.dayNumberText.replace('日', '');
    },
    businessHours: true,
  };
  calendarOptions = this.preCalendarOption;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  private getLoginList() {
    this.subscription = this.userService
      .getLoginList(this.authService.uid)
      .subscribe((allData: UserLoginList[]) => {
        this.calendarOptions = this.preCalendarOption;
        const data = [];
        allData.forEach((monthData: UserLoginList) => {
          for (let i = 1; i <= 31; i++) {
            const className1: string = 'fc-pokemon' + monthData[i]?.pokemonId1;
            const className2: string = 'fc-pokemon' + monthData[i]?.pokemonId2;
            if (monthData[i]?.pokemonId1) {
              data.push({
                date: monthData[i].date,
                className: className1,
              });
            }
            if (monthData[i]?.pokemonId2) {
              data.push({
                date: monthData[i].date,
                className: className2,
              });
            }
            this.calendarOptions.events = data;
          }
        });
      });
  }

  ngOnInit(): void {
    this.getLoginList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
