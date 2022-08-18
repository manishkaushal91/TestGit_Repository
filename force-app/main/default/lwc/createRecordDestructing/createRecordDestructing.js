import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class CreateRecordDestructing extends LightningElement {

    formFields = {}
    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name] = value
        console.log(this.formFields)
    }

    clickHandler(){
        const recordInput = {
            apiName : 'Contact',
            fields : this.formFields,
        }
        createRecord(recordInput).then(response =>{
            console.log(response.id)
        }).catch(error=>{
            console.log(error.body.message)
        })
    }
}