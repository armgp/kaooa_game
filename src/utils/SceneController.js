import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneController {
  constructor(canvasID, bgcolor) {
    this.canvasID = canvasID;
    this.bgcolor = bgcolor;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 500;

    this.scene = new THREE.Scene();

    const canvas = document.getElementById(this.canvasID);
    this.renderer = new THREE.WebGLRenderer({canvas, antialias: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(this.bgcolor);

    document.body.appendChild(this.renderer.domElement);

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // this.stats = Stats();
    // document.body.appendChild(this.stats.dom);

    window.addEventListener("resize", () => this.onWindowResize(), false);

  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
    // this.stats.update();
    // this.controls.update();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.updateProjectionMatrix();
  }




}