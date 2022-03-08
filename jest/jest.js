import {LightningElement, wire} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

export default class Jest extends LightningElement {
  greeting = 'World';
  recordId = '0067Z00000OwkrF';
  name;

  @wire(getRecord, {recordId: '$recordId', fields: ['Opportunity.Name']})
  wiredRecord({ data }) {
    if (data) {
      this.name = data.fields.Name.value;
    }
  }

  handleChange(event) {
    this.greeting = event.target.value;
  }
}