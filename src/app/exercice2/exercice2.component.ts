import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit, OnChanges {
  @ViewChild("myInput") public el: HTMLInputElement;

  public valeur: string = "";

  constructor() {}

  ngOnChanges(event: any): void {
    this.valeur = event.target.value;
  }

  ngOnInit() {
    this.valeur = "";
  }
}
