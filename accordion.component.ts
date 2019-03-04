import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {


  @Input() title: string;

  @Input() active: boolean = false;

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();
items: any[];
submitted = false;
registerForm: FormGroup;
registerFormtwo: FormGroup[];
constructor(private fb: FormBuilder) { }

  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }
  passwordMatchValidator(g: FormGroup) {
    const mina = g.get('min').value;
    const maxa = g.get('max').value;
   console.log(mina + ' , ' + maxa);
    return g.get('min').value < g.get('max').value ? null : {'mismatch': true};
}
  get f() {  return this.registerForm.controls; }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      min: new FormControl('', [Validators.required, Validators.min(2)]),
      max: new FormControl('', [Validators.required, Validators.max(50)]),
      avarege: new FormControl('', Validators.required),
    }, {Validators: this.passwordMatchValidator});
    for ( let  i = 0; i < this.items.length; i++) {
      for ( let  j = 0; j < this.items[i].items.length; j++) {
        this.registerFormtwo.push( this.registerForm );
      }
    }
    debugger;
  }
  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }


      console.log(this.registerForm.value);
  }

  ngOnInit() {
    this.registerFormtwo = [];
    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:max-line-length
    this.items = [{"id":1,"title":"אפרסמון","items":[{"id":1,"title":"מיני אפרסמון","minimum":5,"maximum":7,"avarege":5.5},{"id":2,"title":"גדול אפרסמון","minimum":3,"maximum":7,"avarege":4.5}]},{"id":2,"title":"אפרסק","items":[{"id":1,"title":"מיני אפרסק","minimum":8,"maximum":10,"avarege":8.5}]}];
    this.createRegisterForm();
  }


}
