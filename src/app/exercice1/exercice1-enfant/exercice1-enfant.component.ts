import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() compteur: any;

  constructor() {}

  ngOnInit() {
    this.compteur = 0;
  }
}
function output() {
  throw new Error("Function not implemented.");
}
