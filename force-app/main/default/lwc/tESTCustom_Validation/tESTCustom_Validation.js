import { LightningElement } from 'lwc';

export default class TESTCustom_Validation extends LightningElement {
   submitHandler(event){
          event.preventDefault();
         const nameElem = this.template.querySelector('.name')
         if(!nameElem.value.includes('India')){
             nameElem.setCustomValidity('India should be there')
         }else{
             nameElem.setCustomValidity('')
             const field = event.detail.fields
             field.Name = nameElem.value;
         }
         nameElem.reportValidity()
         const IndustryElem = this.template.querySelector('.industry')
         if(!IndustryElem.value.includes('Industry')){
             IndustryElem.setCustomValidity('Industry should be there')
         }else{
             IndustryElem.setCustomValidity('')
             const field = event.detail.fields
             field.Name = IndustryElem.value;
         }
         IndustryElem.reportValidity()
         /* const revenueElem = this.template.querySelector('.revenue')
         if(!isNaN(revenueElem)){
             revenueElem.setCustomValidity('Should be number')
         }else{
             revenueElem.setCustomValidity('')
             const field = event.detail.fields
             field.Name = revenueElem.value;
         } */
        //  revenueElem.reportValidity()
         this.template.querySelector('lightning-record-edit-form').submit(nameElem, IndustryElem) 
      }
}