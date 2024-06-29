import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `<div><p>Warning!!!</p></div>`,
    styles:[
        `
        p {
           color:pink;
        }
        div {
            background-color : red;
            padding:30px;
            margin : 30px
        }
        `
    ]
})
export class WarningAlertComponent {

}