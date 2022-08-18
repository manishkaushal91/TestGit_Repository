import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';
export default class Imperation_create_method_PP extends LightningElement {

    @track name;
    @track phone;
    @track fax;
    @track rating;
    @track industry;
    recordId

    AccountName(event){
        this.name=event.target.value;
    }
    AccountPhone(event){
        this.phone=event.target.value;
    }
    AccountFax(event){
        this.fax=event.target.value;
    }
    AccountRating(event){
        this.rating=event.target.value;
    }
    AccountIndustry(event){
        this.industry=event.target.value;
    }

    SaveButton(){
        
        const fields = {'Name' :this.name, 'Phone' : this.phone , 'Fax' : this.fax, 'Rating': this.rating, 'Industry' : this.industry}
        
        const object = {"apiName" : "Account" , fields }
        createRecord(object).then(Response=>{
            alert('Account is created' + Response.id )
            this.recordId = Response.id
        }).catch(Error=>{
            alert('Error Occured' + Error.body.message)})
    }
    deleteHandler(){
        deleteRecord(this.recordId).then(response =>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    updateHandler(){
        const recordInput ={
            apiName : 'Account',
            fields : {
                recordId : '0015i00000LjRJCAA3',
                Rating : this.rating
            }
        }
        updateRecord(recordInput).then(response =>{
            console.log(response.Rating)
        }).catch(error=>{
            console.log(error)
        })
    }

}