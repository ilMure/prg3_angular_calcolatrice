import { Component , Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-btn-operator',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './btn-operator.component.html',
  styleUrl: './btn-operator.component.css'
})
export class BtnOperatorComponent {
  @Input() out: string = "";
}
