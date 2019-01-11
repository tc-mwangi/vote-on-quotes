import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})



export class QuoteComponent implements OnInit {

  @HostBinding('attr.class') cssClass ='row';
  quote: string;
  author: string;
  contributor: string;
  votes: number;

  // default attributes
  constructor() { 
    this.quote = 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.';
    this.author = 'Helen Keller';
    this.contributor = 'Hope Munene';
    this.votes = 0;
  }


  // when i click the like link add one vote to the votes counter
  voteLike(){
    this.votes = +1;
    return false;

  }

  // when i click the dislike link remove one vote to the votes counter
  voteDislike(){
    this.votes = -1;
    return false;
    
  }

  ngOnInit() {
  }

}
