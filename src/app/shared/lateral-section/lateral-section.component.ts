import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lateral-section',
  templateUrl: './lateral-section.component.html',
  styleUrls: ['./lateral-section.component.scss']
})
export class LateralSectionComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();
  @Input() direction: string = 'left';
  @Input() translateHorizontal: number = -47;
  @Input() translateVertical: number = 36;
  @Input() rotate: string = '0deg';

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.toggle.emit(true);
  }

}
