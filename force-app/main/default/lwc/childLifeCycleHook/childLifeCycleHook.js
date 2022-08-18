import { LightningElement } from 'lwc';

export default class ChildLifeCycleHook extends LightningElement {
    
    constructor(){
        super()
        console.log('Child Constructor Called');
    }
    connectedCallback(){
        console.log('Child connectedCallback Called');
        throw new Error('Loading of child component failed');
    }
    renderedCallback(){
        console.log('Child renderedCallback Called');
    }
    disconnectedCallback(){
        alert('child disconnectedCallback Called !!! ');
    }
}