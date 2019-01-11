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
  voteCounter: number = 0;
  likeVotes: number = 0;
  dislikeVotes: number = 0;

  // default attributes
  constructor() { 
    this.quote = 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.';
    this.author = 'Helen Keller';
    this.contributor = 'Hope Munene';
  }

  totalVotes(){
    

  }


  // for each click the like link add one vote to the votes counter
  voteLike(){
    this.likeVotes++;
    return false;
    

  }

  // for each click the dislike link remove one vote to the votes counter
  voteDislike(){
    this.dislikeVotes++;

    return false;
    
    
  }

  ngOnInit() {
  }

}
