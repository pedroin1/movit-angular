import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';

  @Output('submit') submitFormEvent = new EventEmitter();
  @Output('navigate') navigateEvent = new EventEmitter();

  submitForm() {
    this.submitFormEvent.emit();
  }

  navigate() {
    this.navigateEvent.emit();
  }
}
