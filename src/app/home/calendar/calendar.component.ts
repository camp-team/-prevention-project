import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
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
    dayCellClassNames(event) {
      if (event.date < new Date(2018, 0, 1)) {
        event.isFuture = true;
      }
    },
    businessHours: false,
    dateClick: this.handleDateClick.bind(this),
  };
  calendarOptions = {
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
    // dayCellClassNames(event) {
    //   if (event.date < new Date(2018, 0, 1)) {
    //     event.isFuture = true;
    //   }
    // },
    businessHours: true,
    // dateClick: this.handleDateClick.bind(this),
  };

  constructor() {
    const data = [];
    data.push({
      date: '2020-10-10',
      className: 'fc-pokemon',
    });
    this.calendarOptions.events = data;
  }

  private handleDateClick(arg) {
    // const week = this.weekList[arg.dayEl.cellIndex];
    // this.date = arg.dateStr
    //   .slice(2)
    //   .replace(/-/g, '.')
    //   .replace(/$/, '(' + week + ')');
    // if (this.today >= this.date && this.minDate <= this.date) {
    //   this.dailyInfoService.createDailyInfo({
    //     authorId: this.authService.uid,
    //     date: this.date,
    //   });
    //   this.router.navigate(['/daily-detail'], {
    //     queryParams: {
    //       date: this.date,
    //     },
    //   });
    // }
  }

  ngOnInit(): void {}
}
