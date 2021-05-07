import { Component, OnInit } from '@angular/core';
import { Requeriment } from 'src/app/models/requeriment';
import { RequerimentService } from 'src/app/services/requeriment/requeriment.service';
import { SwalService } from 'src/app/services/swal/swal.service';

@Component({
  selector: 'app-requeriments',
  templateUrl: './requeriments.component.html',
  styleUrls: ['./requeriments.component.css']
})
export class RequerimentsComponent implements OnInit {

  data: Requeriment[]
  displayedColumns: string[] = ['date', 'name', 'email', 'phone', 'address', 'typeRequeriment', 'product', 'description', 'canal', 'user'];

  constructor(
    private swalService: SwalService,
    private requerimentService: RequerimentService
  ) { }

  ngOnInit(): void {
    this.getRequeriments()
  }

  getRequeriments(): void {
    this.swalService.loading()
    this.requerimentService.getRequeriments().subscribe(
      data => this.handleResponse(data),
      err => this.swalService.error(err)
    )
  }

  handleResponse(data: Requeriment[]): void {
    this.swalService.closeSwal()
    this.data = data
  }

}
