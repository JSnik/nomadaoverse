import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  RendererFactory2,
  ViewChild
} from '@angular/core';
// @ts-ignore
const pako = require('pako')
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
// @ts-ignore
import { BoundingBoxHelper } from 'three/examples/jsm/helpers/BoundingBoxHelper';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {TextureLoader} from "three";

@Component({
  selector: 'app-hotel-view3',
  templateUrl: './hotel-view3.component.html',
  styleUrls: ['./hotel-view3.component.scss']
})
export class HotelView3Component implements OnInit, AfterViewInit, OnDestroy{
  private canvas: HTMLCanvasElement;
  isLoaded: boolean = true;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private keyboardControls = {
    left: false,
    right: false,
    up: false,
    down: false,
    s: false,
    w: false
  };
  private mouse = new THREE.Vector2();
  private prevMouse = new THREE.Vector2();
  private isMouseDown = false;
  private model: THREE.Object3D;

  constructor(private rendererFactory: RendererFactory2) {
  }
  ngOnInit() {
    this.scene = new THREE.Scene();
    // Create the camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Create the renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    document.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    document.addEventListener('mousedown', () => {
      this.isMouseDown = true;
    });

    document.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    ///
  }

  ngAfterViewInit() {
    const loader = new GLTFLoader();
    const url = '../assets/new3/Main.gltf';

    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.load(url, (gltf: any) => {
      // Add the model to the scene
      this.isLoaded = false;
      this.model = gltf.scene;
      this.scene.add(this.model);

    }, undefined, (error: any) => {
      console.error(error);
    });


    // Add an ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    // Add a point light to the scene
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 10, 10);
    this.scene.add(pointLight);

    // Adjust the camera position and lookAt target
    this.camera.position.set(0, 8, 0);
    this.camera.lookAt(new THREE.Vector3(0, 8, 50));


    setTimeout(() => {
      this.animate();
    }, )
  }
  // saba
  animate() {
    requestAnimationFrame(() => this.animate());

    // Move the camera based on keyboard input
    const moveSpeed = 1;
    const widthBoundarySize = 28;
    const heightBoundarySize = 33;
    const z = 45;

    const forward = new THREE.Vector3(0,0,-1);
    forward.applyQuaternion(this.camera.quaternion);

    // if (this.keyboardControls.left && this.camera.position.x < 55) {
    //   this.camera.position.x += moveSpeed;
    // }
    // if (this.keyboardControls.right && this.camera.position.x > -z) {
    //   this.camera.position.x -= moveSpeed;
    // }

    if (this.keyboardControls.up ) {
      this.camera.position.y += moveSpeed;
    }
    if (this.keyboardControls.down) {
      this.camera.position.y -= moveSpeed;
    }
    //  && this.camera.position.z < 30
    if (this.keyboardControls.w) {
      // this.camera.position.z += moveSpeed;
      // console.log(this.camera.position.z)
      console.log(forward)
      this.camera.position.add(forward.multiplyScalar(moveSpeed))
    }
    // && this.camera.position.z > -widthBoundarySize
    if (this.keyboardControls.s) {
      // this.camera.position.z -= moveSpeed;
      const backward = forward.clone().negate();
      this.camera.position.add(backward.multiplyScalar(moveSpeed))
    }


    // Update the scene
    this.scene.rotation.y += 0.0000000001;

    // Render the scene
    this.renderer.render(this.scene, this.camera);

    // mouse move
    if (this.isMouseDown) {
      const deltaMove = new THREE.Vector2().subVectors(this.mouse, this.prevMouse);
      const sensitivity = 0.1;
      this.camera.rotation.y -= deltaMove.x - 0.03 * sensitivity;
      // this.camera.rotation.x -= deltaMove.y + 0.03 * sensitivity;
    }
    this.prevMouse.copy(this.mouse);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.keyboardControls.left = true;
        break;
      case 'ArrowRight':
        this.keyboardControls.right = true;
        break;
      case 'ArrowUp':
        this.keyboardControls.up = true;
        break;
      case 'ArrowDown':
        this.keyboardControls.down = true;
        break;
      case'w':
        this.keyboardControls.w = true;
        break;
      case 's':
        this.keyboardControls.s = true;
        break;
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.keyboardControls.left = false;
        break
      case 'ArrowRight':
        this.keyboardControls.right = false;
        break;
      case 'ArrowUp':
        this.keyboardControls.up = false;
        break;
      case 'ArrowDown':
        this.keyboardControls.down = false;
        break;
      case 'w':
        this.keyboardControls.w = false;
        break;
      case 's':
        this.keyboardControls.s = false;
        break;
    }
  }

  destroyThree() {
    // this.canvas.remove();

    this.renderer.dispose();

    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((m) => m.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroyThree();
  }
}
