import { Injectable } from '@angular/core';
import { Player } from './models/player.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSnackBar } from '@angular/material';
import { Result } from './models/result.model';

@Injectable()
export class GameService {

  private result: Result[] = [
    { a: 'Pierre', b: 'Ciseaux', result: 'Pierre émousse Ciseaux' },
    { a: 'Pierre', b: 'Lézard', result: 'Pierre écrase Lézard' },
    { a: 'Feuille', b: 'Pierre', result: 'Feuille recouvre Pierre' },
    { a: 'Feuille', b: 'Spock', result: 'Feuille discrédite Spock' },
    { a: 'Ciseaux', b: 'Feuille', result: 'Ciseaux coupe Feuille' },
    { a: 'Ciseaux', b: 'Lézard', result: 'Ciseaux décapite Lézard' },
    { a: 'Lézard', b: 'Feuille', result: 'Lézard mange Feuille' },
    { a: 'Lézard', b: 'Spock', result: 'Lézard poison Spock' },
    { a: 'Spock', b: 'Pierre', result: 'Spock vaporise Pierre' },
    { a: 'Spock', b: 'Ciseaux', result: 'Spock casse Ciseaux' }
  ];

  counter$ = new BehaviorSubject<number>(0);
  get counter() { return this.counter$.value; }
  set counter(v: number) { this.counter$.next(v); }

  player1$ = new BehaviorSubject<Player>(undefined);
  get player1() { return this.player1$.value; }
  set player1(p: Player) { this.player1$.next(p); }

  player2$ = new BehaviorSubject<Player>(undefined);
  get player2() { return this.player2$.value; }
  set player2(p: Player) { this.player2$.next(p); }

  constructor(
    private snackbar: MatSnackBar
  ) { }

  init(): void {
    let name1, name2;
    while (!name1) {
      name1 = prompt('Name of player 1');
    }
    while (!name2) {
      name2 = prompt('Name of player 2');
    }
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
    this.counter = 0;
  }

  resetScore(): void {
    this.player1.score = this.player2.score = 0;
  }

  compare(r1: string, r2: string): void {
    let res;
    if (r1 !== r2) {
      const rp1 = this.findResult(r1, r2);
      const rp2 = this.findResult(r2, r1);
      if (rp1) {
        this.player1.score++;
        res = rp1.result;
      } else {
        this.player2.score++;
        res = rp2.result;
      }
    } else {
      res = 'Égalité';
    }
    this.counterIncrease();
    this.displayResult(res);
  }

  counterIncrease(): void {
    this.counter = this.counter + 1;
  }

  findResult(r1: string, r2: string): Result {
    return this.result.find(e => e.a === r1 && e.b === r2);
  }

  displayResult(res: string): void {
    this.snackbar.open(res, null, { duration: 3000 });
  }

}
