import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotyfService {

  notfy = new Notyf({
    duration: 2500,
    position: {
      x: 'right',
      y: 'top'
    },
    ripple: true,
    dismissible: true,
    types: [
      {
        type: 'success',
        className: 'text-base',
      },
      {
        type: 'error',
        className: 'text-base'
      }
    ]
  });

  success(message: string) {
    return this.notfy.success(message);
  }

  error(message: string) {
    return this.notfy.error(message);
  }


}
