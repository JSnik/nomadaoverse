import {AfterViewInit, Component, DoCheck, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
const pako = require('pako')
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {
  }

  constructor() {

  }

}
