import { LightningElement,api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {NavigationMixin} from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LDS_Imperation_Delete_Method extends LightningElement {

@api recordId;

DeleteMe(event){
    deleteRecord(this.recordId).then(response=>{
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        });
    }).catch(error=>{
            const event = new ShowToastEvent({
                title: 'Error Deleting Account',
                message: 'Cannot delete the account '+error.body.message,
            });
            this.dispatchEvent(event);
    });
}

}