import { LightningElement } from 'lwc';

export default class HighestNumber extends LightningElement {

     fNumber;
     SNumber;
     TNumber;

    handleClick(event){
        const wh =event.target.name;
        
        if(wh == "fn"){
            this.fNumber = event.target.value; 
        }
        else if(wh == "Sn") {
            this.SNumber = event.target.value;
        }
        else if(wh == "Tn"){
            this.TNumber = event.target.value;
        }
    }

    Calculate(event){
        const a = parseInt(this.fNumber);
        const b = parseInt(this.SNumber);
        const c = parseInt(this.TNumber);

        if(a>b && a>c){
            alert('A is Greater ' + a);
        }
        else if(b>c && b>a){
            alert('B is Greater ' + b);
        }
        else{
            alert('C is Greater ' + c);
        }
    }

    Clear(event){
        this.fNumber = '';
        this.SNumber = '';
        this.TNumber = '';
    }
}