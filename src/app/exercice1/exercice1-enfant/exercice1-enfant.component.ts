import {
  Component,
  EventEmitter,
  OnInit,
  OnChanges,
  Output
} from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"]
})
export class Exercice1EnfantComponent implements OnInit {
  public compteur: number = 0;
  constructor() {}
  @Output() public changeEvent: EventEmitter<number> = new EventEmitter();

  plusevent() {
    this.compteur += 1;
    this.changeEvent.emit(this.compteur);
  }
  malusevent() {
    this.compteur -= 1;
    this.changeEvent.emit(this.compteur);
  }
  ngOnInit() {
    this.changeEvent.emit(0);
  }
}
