import * as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default class StartBoard {
    constructor(){
        this.board = new THREE.Group();
        const fontLoader = new FontLoader();
        fontLoader.load('src/assets/Karma_Future_Regular.json', (font)=>{
            const geometry = new TextGeometry(`START KAOOA`, {
                font: font,
                size: 10,
                height: 4
            });

            const textMesh = new THREE.Mesh(geometry, [
                new THREE.MeshToonMaterial({color: 0x4444e1}), //front
                new THREE.MeshToonMaterial({color: 0xffffff}) //side
            ]);

            textMesh.castShadow = true;
            textMesh.scale.x = 3.5;
            textMesh.scale.y = 3.5;
            textMesh.scale.z = 3.5;
            textMesh.position.x = -150;
            textMesh.position.y = 0;

            this.board.add(textMesh);
        });
    }

}
