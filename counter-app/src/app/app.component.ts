import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = "counter-app";
  count:number =0;



  handleIncrease(){
    if(this.count!=10)
    this.count=this.count+1;
  }
  handleDecrease(){
    if(this.count!=0){
      this.count =this.count-1;
    }else{
     this.resetCount()
      }
    }
    
    resetCount(){
      this.count=0;
    }
}
