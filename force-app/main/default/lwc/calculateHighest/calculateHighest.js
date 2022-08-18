import { LightningElement } from 'lwc';

export default class CalculateHighest extends LightningElement {
    firstNumber;
     secondNumber;
     thirdNumber;

    firstNum(event) {
        this.firstNumber = event.target.value;
    }
    secondNum(event) {
        this.secondNumber = event.target.value;
    }
    ThirdNum(event) {
        this.thirdNumber = event.target.value;
    }

    Calcuate(event) {
        const a = parseInt(this.firstNumber);
        const b = parseInt(this.secondNumber);
        const c = parseInt(this.thirdNumber);

        if (a > b && a > c) {
            alert('A is highest ' + a);
        }
        else if (b > a && b > c) {
            alert('B is highest ' + b);
        }
        else {
            alert('C is highest ' + c);
        }
    }

    Clear(event) {

        this.firstNumber = '';
        this.secondNumber = '';
        this.thirdNumber = '';

    }
}