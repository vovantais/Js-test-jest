import {createElement} from 'lwc'
import Jest from '../jest';
import { getRecord } from "lightning/uiRecordApi";
const mockGetRecord = require("./testData.json");


describe('test events', () => {
  beforeEach(() => {
    const element = createElement('c-jest', {
      is: Jest
    });
    document.body.appendChild(element);
  });

  it('Test default greet value should be Hello, World!', () => {
    const element = document.querySelector('c-jest');
    const text = element.shadowRoot.querySelector('.greeting');
    expect(text.textContent).toBe('Hello, World!');
  })

  it('test input change event value', () => {
    const element = document.querySelector('c-jest');
    const inputElement = element.shadowRoot.querySelector('.input');
    inputElement.value = 'Salesforce';
    inputElement.dispatchEvent(new CustomEvent('change'));
    const text = element.shadowRoot.querySelector('p');
    return Promise.resolve().then(() => {
      expect(text.textContent).toBe('Hello, Salesforce!');
    });
  });

  it('should display record', function () {
    getRecord.emit(mockGetRecord);

    return Promise.resolve().then(() => {
      const element = document.querySelector('c-jest');
      const content = element.shadowRoot.querySelector(".content");
      const nameField = mockGetRecord.fields.Name.value;
      expect(content.textContent).toBe(`Name: ${nameField}`);
    });
  });
});