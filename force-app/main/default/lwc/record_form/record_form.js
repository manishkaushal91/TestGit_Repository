import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from  '@salesforce/schema/Opportunity';
import NAME_FIELD from  '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import { RecordFieldDataType } from 'lightning/uiRecordApi';



export default class Record_form extends LightningElement {

    recordId;
    objectName = OPPORTUNITY_OBJECT;
    fieldList = [NAME_FIELD, CLOSEDATE_FIELD, STAGENAME_FIELD];

    SuccessHandler(event){
        //console.log(event.detail.StageName);
        this.recordId =event.detail.id;
        const toastEvent = new ShowToastEvent({
            title:"Opportunity Created",
            message : "Record ID: "+ event.detail.id,
            variant : "Success"
        })
        this.dispatchEvent(toastEvent);
    }
}