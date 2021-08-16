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
  public valeur: string;
  @ViewChild("myinput") public el: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit() {
    this.valeur = "toto";
  }

  changeInput() {
    console.log("changeInput");
    this.valeur = this.el.nativeElement.value;
  }

  ngOnChanges(changements: SimpleChanges) {
    //Insérez votre code de détection du changement ici
    console.log(changements.libelle.currentValue); //Valeur actuelle du libellé (après le changement)
    this.valeur = changements.libelle.currentValue;
  }
}
