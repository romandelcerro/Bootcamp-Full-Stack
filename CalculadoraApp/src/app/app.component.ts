import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Calculadora';

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  cuadro: string = "0";
  cuadroVacio:boolean = false;
  operacion: string = "";

  addNumero(num:number): void{
    if(this.cuadro==="0"|| this.cuadroVacio || this.cuadro==="NaN"){
      this.cuadro = num.toString();
      this.cuadroVacio = false;
    }else{
      this.cuadro +=num;
    }
  }

  btnC():void{
    if(!this.cuadroVacio){
      this.cuadro="0";
    }
  }

  btnCE(): void {
    this.cuadro = "0";
    this.numero1 = 0;
    this.numero2 = 0;
    this.operacion = "";
  }

  btnMasMenos(): void{
    if (this.cuadro === "0") {
      return;
    }

    if (this.cuadro.startsWith("+") || !this.cuadro.startsWith("-")) {
      this.cuadro = "-" + this.cuadro;
    }

    else {
      this.cuadro = this.cuadro.substring(1);
    }
  }

  btnDecimal(): void {
    if (this.cuadro.includes(".")) {
      return;
    }
  
    if (this.cuadro === "0") {
      this.cuadro = "0.";
    }

    else {
      this.cuadro += ".";
    }
  }

  btnRetroceso(): void {
    if (this.cuadro === "0") {
      return;
    }
  
    this.cuadro = this.cuadro.slice(0, -1);
  
    if (this.cuadro === "") {
      this.cuadro = "0";
    }
  }

  btnSumar(): void {
    if (this.numero1 !== null) {
      this.realizarOperacion();
    }
    this.operacion = "+";
    this.numero1 = parseFloat(this.cuadro);
    this.cuadro = "0";
  }

  btnRestar(): void {
    if (this.numero1 !== null) {
      this.realizarOperacion();
    }
    this.operacion = "-";
    this.numero1 = parseFloat(this.cuadro);
    this.cuadro = "0";
  }

  btnMultiplicar(): void {
    if (this.numero1 !== null) {
      this.realizarOperacion();
    }
    this.operacion = "*";
    this.numero1 = parseFloat(this.cuadro);
    this.cuadro = "0";
  }

  btnDividir(): void {
    if (this.numero1 !== null) {
      this.realizarOperacion();
    }
    this.operacion = "/";
    this.numero1 = parseFloat(this.cuadro);
    this.cuadro = "0";
  }

  btnIgual():void{
    if (this.numero1 === null) {
      return;
    }
    this.realizarOperacion();
    this.operacion = "";
    this.numero1 === null;

  }

  realizarOperacion(): void {
    this.numero2 = parseFloat(this.cuadro);

    switch (this.operacion) {
      case "+":
        this.resultado = this.numero1 + this.numero2;
        break;
      case "-":
        this.resultado = this.numero1 - this.numero2;
        break;
      case "*":
        this.resultado = this.numero1 * this.numero2;
        break;
      case "/":
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        return;
    }
    this.cuadro = this.resultado.toString();
  }
 
}
