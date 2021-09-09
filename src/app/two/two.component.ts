import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  li:any;
  
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://api.github.com/users')
    .subscribe(result=>{
      if(result){
        
      }
      console.log(result)
     this.li=result;
      
    });
    
      
  }

}


