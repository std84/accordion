import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion';
  users = [
    { id: 1001, label: 'Roma', lat: 42, lng: 12 },
    { id: 1002, label: 'Copenaghen', lat: 56, lng: 14},
    { id: 1003, label: 'Gibuti', lat: 11, lng: 44}
  ];
}
