import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string;
  @Input() autocompleta!: string;
  @Input() icon!: string;

  ispassword!: boolean;
  hide: boolean = true;
  

  constructor() { }

  ngOnInit() {
    if(this.type=='password') this.ispassword = true;
  }


  ShowHidePassword() {
    this.hide = !this.hide;

    if(this.hide) this.type = 'password';
    else this.type = 'text';

  }

}
