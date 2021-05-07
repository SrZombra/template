import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { TypeRequeriment } from 'src/app/models/type-requeriment';
import { RequerimentService } from 'src/app/services/requeriment/requeriment.service';
import { SwalService } from 'src/app/services/swal/swal.service';

@Component({
  selector: 'app-requeriments-form',
  templateUrl: './requeriments-form.component.html',
  styleUrls: ['./requeriments-form.component.scss']
})
export class RequerimentsFormComponent implements OnInit {

  typeRequeriments: TypeRequeriment[] = [
    { name: "Pregunta" },
    { name: "Queja" },
    { name: "Reclamo" },
    { name: "Sugerencia" },
    { name: "Felicitacion" },
  ]

  products: Product[] = [
    { name: "POLIZA (colectiva o individual) en (autos-general-fianzas-vida)" },
    { name: "SOAT" },
    { name: "ARL" },
    { name: "OTROS" },
  ]

  public form: FormGroup = new FormGroup({
    typeRequeriment: new FormControl('', [ Validators.required ]),
    name: new FormControl('', [ Validators.required ]),
    phone: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    address: new FormControl('', [ Validators.required ]),
    product: new FormControl('', [ Validators.required ]),
    description: new FormControl('', [ Validators.required ]),
    plate: new FormControl('', []),
    authorizate_data: new FormControl('', [ Validators.requiredTrue ]),
    canal: new FormControl({ name:"WEB" })
  })

  constructor(
    private sweetalertService: SwalService,
    private requerimentService: RequerimentService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.sweetalertService.loading()
    this.requerimentService.createRequeriment(this.form.getRawValue()).subscribe(
      () => this.handleResponse(),
      err => console.log(err)
    )
  }

  handleResponse(): void {
    this.sweetalertService.success()
    this.form.reset()
  }

}
