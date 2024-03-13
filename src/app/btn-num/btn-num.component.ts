import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-btn-num',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './btn-num.component.html',
  styleUrl: './btn-num.component.css'
})
export class BtnNumComponent {
  @Input() num: number = 0;
}
