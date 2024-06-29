import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
serverId :number = 10;
serverStatus : string = "offline";
allowNewServer :boolean = false;
serverCreationStatus = " No server created";
serverName = 'Hello';
username = '';
emptyString : boolean = false;
  getServerStatus() {
  return this.serverStatus
  }
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }
  serverCreated() {
    this.serverCreationStatus = "Server created name of server is " + this.serverName;
  }
  updateName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  isEmptyString() { 
   if (this.username==='') {
    this.emptyString =true;
   }
   else{
    this.username = '';
   }
  }
}
