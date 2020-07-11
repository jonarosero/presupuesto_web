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
  {task:'Correo', name: 'NIC.ec', desc:'300 cuentas de correo empresarial con 30 GB de almacenamiento', month: 897, year: 10764},
  {task:'Servidor', name: 'Digital Ocean', desc:'2GB de memoria 1TB de transferencia Disco SSD de 50GB', month: 10, year: 120},
  {task:'Base de datos', name: 'Digital Ocean', desc:'Autogestionada 2GB de memoria Disco de 25GB 1vCPU', month: 30, year: 360}
];

const TOTAL1: total[] = [
  {desc: 'TOTAL', month: 939.92, year: 11279.04}
];

const FIRE_DATA: element_data[] = [
  {task:'Dominio', name: 'NIC.ec', desc:'indev.com.ec 1 dominio subdominios ilimitados', month: 2.92, year: 35},
  {task:'Certificado SSL', name: 'https://letsencrypt.org/', desc:'Certificado gratuito renovar cada 3 meses', month: 0, year: 0},
  {task:'Correo', name: 'NIC.ec', desc:'300 cuentas de correo empresarial con 30 GB de almacenamiento', month: 897, year: 10764},
  {task:'Hosting', name: 'Firebase', desc:'20 GB almacenamiento y 50 GB de transferencia', month: 6.26, year: 75.12},
  {task:'Base de datos', name: 'Cloud Firestore', desc:'4 GB de almacenamiento, 15 GB de transferencia, 600,000 escrituras y 1,500,000 lecturas', month: 20, year: 240},
  {task:'Serverless', name: 'Cloud Functions', desc:'4,000,000 invocaciones 400,000 GB-seconds 200,000 CPU-seconds', month: 0.80, year: 9.6},
];

const TOTAL2: total[] = [
  {desc: 'TOTAL', month: 926.98, year: 11123.76}
];

@Component({
  selector: 'app-two-year',
  templateUrl: './two-year.component.html',
  styleUrls: ['./two-year.component.css']
})
export class TwoYearComponent{
  displayedColumns: string[] = ['task', 'name', 'desc', 'month', 'year'];

  dataSource = DIGITAL_DATA;

  dataOther = FIRE_DATA;

  dataTotal1 = TOTAL1;

  dataTotal2 = TOTAL2;
}
