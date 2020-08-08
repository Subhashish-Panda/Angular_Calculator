import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  add(num1:number,num2:number):number
  {
  return num1+num2;  
  }
  sub(num1:number,num2:number):number
  {
  return num1-num2;  
  }
  mul(num1:number,num2:number):number
  {
  return num1*num2;  
  }
  divide(num1:number,num2:number):number
  {
  return num1/num2;  
  }
  rem(num1:number,num2:number):number
  {
  return num1%num2;  
  }

}