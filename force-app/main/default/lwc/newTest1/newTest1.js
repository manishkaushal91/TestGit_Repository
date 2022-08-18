import { LightningElement } from 'lwc';

export default class NewTest1 extends LightningElement {
    name = 'Manish kaushal'

    handleClick(event){
        this.name ='Manish kaushal is Salesforce Developer'
    }
    ChangeHandler(event){
        this.name = event.target.value;
    }
}