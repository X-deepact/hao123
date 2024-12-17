import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title?: string = '';
  @Input() showCancel: boolean = true;
  @Input() showConfirm: boolean = true;
  @Input() cancelText: string = 'Cancel';
  @Input() confirmText: string = 'Confirm';

  @Output() close = new EventEmitter<void>();
  // @Output() confirm = new EventEmitter<void>();
  // @Output() cancel = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  // confirmModal() {
  //   this.confirm.emit();
  // }

  // cancelModal() {
  //   this.cancel.emit();
  // }
}
