import { LightningElement ,track} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class LDS_IMperation_Create_Method extends LightningElement {

    @track name;
    @track phone;
    @track fax;
    @track industry;

    callName(event){
        this.name = event.target.value;
    }
    callPhone(event){
        this.phone = event.target.value;
    }
    callFax(event){
        this.fax = event.target.value;
    }
    callIndustry(event){
        this.industry = event.target.value;
    }

    callMe(){
        //Step 1 --> Create Field List
        const fields={'Name':this.name, 'Phone':this.phone, 'Fax':this.fax, 'Industry':this.industry};
        
        //Step 2 -->Create API Record With Field
        const recordData={
            apiName:'Account',
            fields
        };
       
        //Step 3 --> Call Imperation
        createRecord(recordData).then(response=>{
            alert('Account was created Successfully with AccountId : '+response.id);
        }).catch(error=>{
            alert('Record Creation failed with following Error : '+error.body.message);
        });
    }
}