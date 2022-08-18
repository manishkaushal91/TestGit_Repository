import { LightningElement,api } from 'lwc';
import Opportunity_Obj from '@salesforce/schema/opportunity';
import Opportunity_Amount from '@salesforce/schema/Opportunity.Amount';
import Opportunity_AccountId from '@salesforce/schema/Opportunity.AccountId';
import Opportunity_Date from '@salesforce/schema/Opportunity.CloseDate';
import Opportunity_Lsource from '@salesforce/schema/Opportunity.LeadSource';
import Opportunity_Name from '@salesforce/schema/Opportunity.name';



export default class Lg_record_form extends LightningElement {

    @api recordId;
    ObjName = Opportunity_Obj;
    fieldName = [Opportunity_Name,Opportunity_Lsource,Opportunity_Date,Opportunity_AccountId,Opportunity_Amount];


}