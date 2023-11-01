import { Component } from '@angular/core';
import { el, faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  sentence = faker.lorem.sentence({ min: 3, max: 5 })
  winningSentence = false;
  inputSentence = "";
  compareSentences(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    console.log(inputValue);
    this.inputSentence = inputValue;
    console.log(this.sentence);
    if (inputValue === this.sentence) {
      this.winningSentence = true;
    }

  }

  compareLetters(index: number) {
    if (index < this.inputSentence.length && this.inputSentence[index] === this.sentence[index]) {
      return "correct";
    }
    else if (index < this.inputSentence.length && this.inputSentence[index] !== this.sentence[index]) {
      return "incorrect";
    }
    else {
      return "neutral";
    }
  }
}
