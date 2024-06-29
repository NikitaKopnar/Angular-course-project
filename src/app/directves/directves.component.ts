import { Component } from '@angular/core';

@Component({
  selector: 'app-directves',
  templateUrl: './directves.component.html',
  styleUrl: './directves.component.css'
})
export class DirectvesComponent {
  serverName = '';
  serverCreatedText = "";
  flag = false;
  toggleButton = false;
  toggleLog = [];
  button1 = false;
  toggleLog1 = [];
  showStatus() {
    this.flag = true;
    this.serverCreatedText = "Server created";
  }
  toggleClick() {
    this.toggleButton = !this.toggleButton;
    this.toggleLog.push(this.toggleLog.length + 1);
  }
  showIndexing() {
    this.button1 = !this.button1;
    this.toggleLog1.push(new Date());
  }
  
}
