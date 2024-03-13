import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnOperatorComponent } from './btn-operator/btn-operator.component';
import { BtnNumComponent } from './btn-num/btn-num.component';
import { BtnEqualComponent } from './btn-equal/btn-equal.component';
import { BtnCancComponent } from './btn-canc/btn-canc.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, BtnOperatorComponent, BtnNumComponent, BtnEqualComponent, BtnCancComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mureddu';
  division = "/";
  sum = "+";
  point = ".";
  sub = "-";
  mult = "*";
  concat = "";
  tempNum = "";
  operator = "";

  insertInOperation = (num: string) => {
    this.concat += num;
  }

  choosenOp = (op: string) => { 
    this.tempNum = this.concat;
    this.concat = "";
    this.operator = op;
  }

  addPoint = () => {
    this.concat += ".";
  }

  equal = () => {
    switch(this.operator){
      case "sum":
        this.concat = ""+(parseFloat(this.tempNum) + parseFloat(this.concat)); 
        break;
      case "mult":
        this.concat = ""+(parseFloat(this.tempNum) * parseFloat(this.concat));
        break;
      case "division":
        this.concat = ""+(parseFloat(this.tempNum) / parseFloat(this.concat));
        break;
      case "sub":
        this.concat = ""+(parseFloat(this.tempNum) - parseFloat(this.concat));
        break;
    }
  }

  canc = () => {
    this.concat = "";
  }
}

