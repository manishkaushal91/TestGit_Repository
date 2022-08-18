import { LightningElement } from 'lwc';

export default class ParentLifeCycleHook extends LightningElement {


    isVisible = false;
    constructor(){
        super()
        console.log('Parent Constructor Called');
    }
    connectedCallback(){
        console.log('Parent connectedCallback Called');
    }
    renderedCallback(){
        console.log('Parent renderedCallback Called');
    }

    handelClick(event){
        this.isVisible = !this.isVisible
    }
    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
}