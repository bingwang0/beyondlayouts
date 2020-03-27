import { LightningElement, track, wire, api } from 'lwc';
import beVisible from '@salesforce/apex/visibilityController.beVisible';
export default class MyComponent extends LightningElement {
    @api recordId;
    @track parentId;
    @track isVisible;
    @wire(beVisible, {accountId : '$recordId'})
    getSpecialParent({error,data}){
        if (data) {
            this.parentId = data;
            this.isVisible = true;
        } else if (error) {
            console.log(error);
        } else {
            console.log('something unknown');
        }
    }
    
}