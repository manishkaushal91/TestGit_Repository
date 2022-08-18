import { LightningElement,api} from 'lwc';
//import {createRecord} from 'lightning/uiRecordApi';
export default class Record_edit_form extends LightningElement {
    @api recordId;

    resetCon(event){
        const collectRecord = this.template.querySelectorAll('lightning-input-field');
        collectRecord.forEach(field=>{field.reset();});
    }

    /* AccCreate(){
        /* const createrRecord = this.template.querySelectorAll('lightning-input-field');
        createrRecord.forEach(field=>{field.create();}); 

        const recordInput = {
            objectApiName : 'Account',
            fields : {
                Name : 'Name',
                Rating : 'Rating',
                Phone : 'Phone',
                Type : 'Type',
                Industry : 'Industry'
            }
        }
        createRecord({recordInput : recordInput}).then(response =>{
            console.log('Response' ,response);
        }).catch(error =>{
            console.log(error.body.message)
        })
    }*/
} 