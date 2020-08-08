import { Component, VERSION } from '@angular/core';
//Imported the service class to root component.
import { CalculateService} from './calculate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  num1:number;
  num2:number;
  res:number;
  //Dependancy injection of service.
  constructor(public cal:CalculateService){

  }

  find(ch:number)
  {
    if(ch==1)
    {
    this.res=this.cal.add(this.num1,this.num2);
    this.num1=this.res;
    this.num2=undefined;
    }
    else if(ch==2)
    {
    this.res=this.cal.sub(this.num1,this.num2);
    this.num1=this.res;
    this.num2=undefined;
    }
    else if(ch==3)
    {
    this.res=this.cal.mul(this.num1,this.num2);
    this.num1=this.res;
    this.num2=undefined;  
    }
    else if(ch==4)
    {
    this.res=this.cal.divide(this.num1,this.num2);
    this.num1=this.res;
    this.num2=undefined;
    }
    else if(ch==5)
    {
    this.res=this.cal.rem(this.num1,this.num2);
    this.num1=this.res;
    this.num2=undefined;
    }
    else
    {
    this.res=undefined;
    this.num1=undefined;
    this.num2=undefined;
    }
  }

}
