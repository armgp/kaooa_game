import * as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default class PlayerBoard {
    constructor(player){
        this.board = new THREE.Group();
        const fontLoader = new FontLoader();
        fontLoader.load('src/assets/Karma_Future_Regular.json', (font)=>{
            const geometry = new TextGeometry(player, {
                font: font,
                size: 6,
                height: 2
            });

            const textMesh = new THREE.Mesh(geometry, [
                new THREE.MeshToonMaterial({color: 0xffffff}), //front
                new THREE.MeshToonMaterial({color: 0x5c2301}) //side
            ]);

            textMesh.castShadow = true;
            textMesh.scale.x = 2.5;
            textMesh.scale.y = 2.5;
            textMesh.scale.z = 2.5;
            textMesh.position.x = -300;
            textMesh.position.y = 120;

            this.board.add(textMesh);
        });
    }

}
