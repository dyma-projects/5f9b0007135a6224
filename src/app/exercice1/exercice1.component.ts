import { Component, OnInit, ViewChild } from "@angular/core";
import { Exercice1EnfantComponent } from "./exercice1-enfant/exercice1-enfant.component";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number;

  @ViewChild(Exercice1EnfantComponent)
  private child: Exercice1EnfantComponent;

  increase() {
    this.child.compteur++;
    this.compteur = this.child.compteur;
  }
  decrease() {
    if (this.child.compteur > 0) {
      this.child.compteur--;
    } else {
      window.alert("'Compteur' ne peut pas être négatif.");
    }
    this.compteur = this.child.compteur;
  }

  constructor() {}

  ngOnInit() {
    this.compteur = 0;
  }
}

export class AppModuler {}
