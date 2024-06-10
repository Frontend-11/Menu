import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(){
  //   this.data={id:0,name:"",age:0}
  // }
@Input() data :any;

@Output() MyEvent = new EventEmitter();

senddata(){

  this.MyEvent.emit()
}



}
