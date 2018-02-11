import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player } from '../models/player.model';
import { MatDialog } from '@angular/material';
import { GesturesComponent } from '../gestures/gestures.component';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  p1: Player;
  p2: Player;
  counter$: Observable<number>;

  constructor(
    private gameService: GameService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.gameService.init();
    this.gameService.player1$.subscribe((p: Player) => this.p1 = p);
    this.gameService.player2$.subscribe((p: Player) => this.p2 = p);
    this.counter$ = this.gameService.counter$;
  }

  newGame(): void {
    this.gameService.init();
  }

  resetScore(): void {
    this.gameService.resetScore();
  }

  battle(): void {
    this.fun(this.p1.name)
      .concatMap((e: string) => this.fun(this.p2.name), (a: string, b: string) => [a, b])
      .subscribe(([r1, r2]: string[]) => this.gameService.compare(r1, r2));
  }

  fun(name: string): Observable<string> {
    return this.dialog
      .open(GesturesComponent, { data: name })
      .afterClosed()
      .filter(e => e);
  }

}
