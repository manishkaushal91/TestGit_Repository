import { LightningElement,track } from 'lwc';

export default class EMI_Calculater extends LightningElement {
    Amount;
    Tenure;
    ROI;
    isVisible = false;
    @track Interest;
    @track Total_Amount ;
    a;
    b;
    c;

    changeHandler(event){
        const wh = event.target.name;

        if(wh == "AMT"){
            this.Amount = event.target.value;
        }else if(wh == "TEN"){
            this.Tenure = event.target.value;
        }else if(wh == "Rate"){
            this.ROI = event.target.value;
        }
    }

    Calci(event){

      
        this.a =parseInt(this.Amount);
        this.b =parseInt(this.Tenure);
        this.c =parseInt(this.ROI);
    
         /* this.Interest = (a*b*c)/100;
         this.Total_Amount = this.Interest+ a; */
         this.isVisible = true;
    }

    get resInterest(){
        
        return this.Interest = (this.a * this.b * this.c)/100
        
    }

    get resAmount(){
        return this.Total_Amount = this.Interest+ this.a;
    }
   

    Clear(event){
        this.Amount = '';
        this.Tenure = '';
        this.ROI = '';
        /*this.Interest = '';
        this.Total_Amount ='';*/
        this.isVisible = false;


    }
}