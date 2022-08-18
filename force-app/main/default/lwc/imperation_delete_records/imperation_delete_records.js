import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class Imperation_delete_records extends LightningElement {
    @api recordId;

    DeleteRec() {
        deleteRecord(this.recordId).then(Response => {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'opportunity',
                    actionName: 'home',
                },
            });

        })
        .catch(Error => {
            
            const event = new ShowToastEvent({
                title: 'Delete Record Error',
                message:
                    'Opportunity Cannot be Deleted '+Error.body.message,
            });
            this.dispatchEvent(event);

        });
    }


}