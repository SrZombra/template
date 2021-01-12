import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  loading(): void{
    Swal.fire({
      // allowOutsideClick: false,
      showConfirmButton: false,
      heightAuto: false,
      html: '<img src="assets/img/loading.gif" style="width: 200px"></img>',
    });
  }

  closeSwal(){
    Swal.close();
  }

}
