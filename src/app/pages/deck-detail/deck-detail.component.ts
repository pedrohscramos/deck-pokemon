import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.scss']
})
export class DeckDetailComponent {
  constructor(public deckService: DeckService, private router: Router, private cardService: CardService){}
  decks: any = [];
  exibeMsg = false;
  
  ngOnInit(){
    this.cardService.getDecks().subscribe((res)=>{
      for(let deck of res){
        this.decks.push(deck);
        if(res.length === 1){
          this.exibeMsg = true;
        }
      }
    })
  }

  goHome(){
    this.router.navigate(['']);
  }

  createNew(){
    this.router.navigate(['/create']);
  }

}