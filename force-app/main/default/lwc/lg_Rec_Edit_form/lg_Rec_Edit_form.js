import { LightningElement,api } from 'lwc';

export default class Lg_Rec_Edit_form extends LightningElement {
    @api recordId;

    Back(event){
        const inputfield = this.template.querySelectorAll('lightning-input-field');
        inputfield.forEach(field=>{
            field.reset();
        });
    }
}