import { HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[closeModal]',
})
export class CloseModal {
  @HostListener('window:keydown.escape', ['$event'])
  closeOpenModal(event: KeyboardEvent) {
    console.log('Escape pressed: ', event);
  }
}
