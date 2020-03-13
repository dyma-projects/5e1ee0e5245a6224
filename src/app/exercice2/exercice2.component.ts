import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"]
})
export class Exercice2Component implements OnInit {
  @ViewChild("input", { static: true }) public input: ElementRef;
  public valeur: string;
  constructor() {}
  ngOnInit() {}
  changes() {
    this.valeur = this.input.nativeElement.value;
  }
}
