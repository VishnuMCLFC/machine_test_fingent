import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  userForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4),Validators.pattern('[A-Za-z]*')]],
  email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  phoneNum:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
  })
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
submitForm()
{
this.router.navigateByUrl('two');
}
}
