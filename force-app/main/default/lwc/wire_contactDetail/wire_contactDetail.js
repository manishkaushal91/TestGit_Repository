// HEllo Updated 
import { LightningElement, track, wire } from 'lwc';
import findcontacts from '@salesforce/apex/wire_ContactDetail.findcontacts';
import {refreshApex} from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.email';
import ID_FIELD from '@salesforce/schema/Contact.Id';

const colm = [ 
    {label:'AccountId' , fieldName:'AccountId' , type:'Text'},
    {label:'Name' , fieldName:'Name' , type:'Text'},
    {label:'Phone' , fieldName:'Phone' , type:'Phone', editable :true },
    {label:'Email' , fieldName:'Email' , type:'Email' , editable :true}

];

export default class Wire_contactDetail extends LightningElement {
    @track searchkey;
    @track col=colm;

    @track draftValues=[];
    @wire(findcontacts, { searchtext: '$searchkey' }) contact;

    handleChange(event) {
        this.searchkey = event.target.value;
    }

    handleSave(event){
        const fields = {};

        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[PHONE_FIELD.fieldApiName] = event.detail.draftValues[0].Phone;
        fields[EMAIL_FIELD.fieldApiName] = event.detail.draftValues[0].Email;
        //console.log('Email',event.detail.draftValues[0].email)
       
        const recordInput = {fields}
       
        updateRecord(recordInput).then(response=>{
            alert('record updated Succesfully');
            this.draftValues=[];
            return refreshApex(this.contact);

        }).catch(error=>{
            alert('Record not saved an Error has encoured during refresh', error.body.message);
        });
        
  }
}