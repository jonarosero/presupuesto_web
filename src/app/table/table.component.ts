import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

export interface element_data {
  task: string;
  name: string;
  desc: string;
  month: number;
  year: number;
}

export interface total{
  desc: string;
  month: number;
  year: number;
}

const DIGITAL_DATA: element_data[] = [
  {task:'Dominio', name: 'NIC.ec', desc:'indev.com.ec 1 dominio subdominios ilimitados', month: 2.92, year: 35},
  {task:'Certificado SSL', name: 'https://letsencrypt.org/', desc:'Certificado gratuito renovar cada 3 meses', month: 0, year: 0},
  {task:'Correo', name: 'NIC.ec', desc:'150 cuentas de correo negocio con 5GB de almacenamiento', month: 150, year: 1800},
  {task:'Servidor', name: 'Digital Ocean', desc:'1GB de memoria 1TB de transferencia Disco SSD de 25GB', month: 5, year: 60},
  {task:'Base de datos', name: 'Digital Ocean', desc:'Autogestionada 1GB de memoria Disco  de 10GB 1vCPU', month: 15, year: 180}
];

const TOTAL1: total[] = [
  {desc: 'TOTAL', month: 172.92, year: 2075.04}
];

const FIRE_DATA: element_data[] = [
  {task:'Dominio', name: 'NIC.ec', desc:'indev.com.ec 1 dominio subdominios ilimitados', month: 2.92, year: 35},
  {task:'Certificado SSL', name: 'https://letsencrypt.org/', desc:'Certificado gratuito renovar cada 3 meses', month: 0, year: 0},
  {task:'Correo', name: 'NIC.ec', desc:'150 cuentas de correo', month: 150, year: 1800},
  {task:'Hosting', name: 'Firebase', desc:'10 GB almacenamiento y 10 GB de transferencia', month: 0, year: 0},
  {task:'Base de datos', name: 'Cloud Firestore', desc:'2 GB de almacenamiento, 10 GB de transferencia, 600,000 escrituras y 1,500,000 lecturas', month: 5, year: 60},
  {task:'Serverless', name: 'Cloud Functions', desc:'2,000,000 invocaciones 400,000 GB-seconds 200,000 CPU-seconds', month: 0, year: 0},
];

const TOTAL2: total[] = [
  {desc: 'TOTAL', month: 158.92, year: 1907.04}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['task', 'name', 'desc', 'month', 'year'];

  dataSource = DIGITAL_DATA;

  dataOther = FIRE_DATA;

  dataTotal1 = TOTAL1;

  dataTotal2 = TOTAL2;

}
