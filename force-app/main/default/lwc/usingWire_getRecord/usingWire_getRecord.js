import { LightningElement,wire ,track} from 'lwc';
import getConList from '@salesforce/apex/wireDecorator_fetchRecord.getConList';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';

const col = [ 
    {label:'First Name' , fieldName:'FirstName' , type:'Text', editable:true},
    {label:'Last Name' , fieldName:'LastName' , type:'Text', editable:true},
    {label:'Phone' , fieldName:'Phone' , type:'Phone'},
    {label:'Email' , fieldName:'Email' , type:'Email'}

];

export default class UsingWire_getRecord extends LightningElement {

    ifTrue = false;
    contactRecord;
    colTable = col;
    @track draftValues=[];

    @wire(getConList) contact
    

    /*contactFetchHandler({data, error}){
        
        if(data){
            this.ifTrue = true;
            console.log(data)
            this.contactRecord = data;
        }
        if(error){
            console.log(error)
        }
    }*/

    handleSave(event){
        const fields = {};
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[FIRST_NAME_FIELD.fieldApiName] = event.detail.draftValues[0].FirstName;
        fields[LAST_NAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;
       
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
