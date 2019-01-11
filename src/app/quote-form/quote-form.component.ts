import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  addQuote(quote: HTMLInputElement, author: HTMLInputElement, contributor: HTMLInputElement){
    console.log(`${quote.value}, ${author.value}, ${contributor.value}`)
    return false

  }

  constructor() { }

  ngOnInit() {
  }

}
