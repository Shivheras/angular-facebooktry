import { Component ,OnInit} from '@angular/core';
import {User} from './user.module';
import { FormBuilder,FormGroup,Validators } from "@angular/forms"
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
 
  user:User = new User();
  userFormGroup:FormGroup;

constructor(private formBuilder:FormBuilder){

}
}
