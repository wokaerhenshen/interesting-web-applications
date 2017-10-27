import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})

export class AppComponent {
  public resultadd:number;  
  public resultdiff:number;
  public resultmul:number;
  public resultdiv:number;
     // *** If we use 'this' we must have a class level declaration.

  public addnum1:string;   // *** Same as above.
  public addnum2:string;  
  public difnum1:string;
  public difnum2:string;
  public mulnum1:string;
  public mulnum2:string;
  public divnum1:string;
  public divnum2:string;

  
  // *** Same as above.

    clear(){
     this.addnum1=null;
     this.addnum2=null;
     this.difnum1=null;
     this.difnum2=null;
     this.mulnum1=null;
     this.mulnum2=null;
     this.divnum1=null;
     this.divnum2=null;
   }

   getround( num:number,len:number){
    return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
   }
   doAddition() {
     
      this.resultadd= this.getround((Number(this.addnum1) + Number(this.addnum2)),2);
      this.clear();
      this.resultdiff=null;
      this.resultmul=null;
      this.resultdiv=null;
     // Number(this.Operand1)+1;
    }
    
    doDifference(){
      this.resultdiff=this.getround((Number(this.difnum1) - Number(this.difnum2)),2);
      this.clear();
      this.resultadd=null;
      this.resultmul=null;
      this.resultdiv=null;
    }

    doProduct(){
      this.resultmul=this.getround((Number(this.mulnum1) * Number(this.mulnum2)),2);
      this.clear();
      this.resultadd=null;
      this.resultdiff=null;
      this.resultdiv=null;
    }

    doQuotient(){
      this.resultdiv=this.getround((Number(this.divnum1) / Number(this.divnum2)),2);
      this.clear();
      this.resultadd=null;
      this.resultdiff=null;
      this.resultmul=null;
    }

  }
  