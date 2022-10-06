import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

export default class KaooaBoard {
    constructor(){
        this.board = new THREE.Group();
        this.hiddenTiles = new THREE.Group();
        this.crowsAndVulture = new THREE.Group();
        
        this.board.scale.x = 0.2;
        this.board.scale.y = 0.2;
        this.board.scale.z = 0.2;
        var extrusionSettings = {
            size: 30, height: 400, curveSegments: 3,
            bevelThickness: 1, bevelSize: 2, bevelEnabled: true,
            material: 0, extrudeMaterial: 1
        };

        const loader = new SVGLoader();
        const starGroup = new THREE.Group();
        loader.load(
            "src/assets/kaooaBoardImg.svg",
            // called when the resource is loaded
            function(data) {
                const paths = data.paths;
                for (let i=0; i<paths.length; i++) {
                    const path = paths[i];
                    const material = new THREE.MeshBasicMaterial({
                        color: path.color,
                        side: THREE.DoubleSide,
                        depthWrite: false
                    });
        
                    const shapes = SVGLoader.createShapes(path);
        
                    for (let j=0; j<shapes.length; j++) {
                        const shape = shapes[j];
                        const geometry = new THREE.ExtrudeGeometry(shape, extrusionSettings);
                        var materialx = new THREE.MeshPhongMaterial({
                            color: 0xffffff,
                            polygonOffset: true,
                            polygonOffsetFactor: 1, 
                            polygonOffsetUnits: 1
                        });
                        const mesh = new THREE.Mesh(geometry, materialx);
                        // const mesh = new THREE.Mesh(geometry, material);
                        starGroup.add(mesh);
                    }

                    starGroup.position.set(-170, -50, 0);
                    starGroup.rotateZ(12);
                }
            },
            // called when loading is in progresses
            function(xhr) {
                console.log((xhr.loaded/xhr.total*100)+'% loaded');
            },
            // called when loading has errors
            function (error) {
                console.log(error);
            }
        );
        this.board.add(starGroup);


        const ht1=this.getHiddenTiles(-13, 100, -2);
        const ht2=this.getHiddenTiles(62, -95, -2);
        const ht3=this.getHiddenTiles(95, 30, -2);
        const ht4=this.getHiddenTiles(-35, 25, -4);
        const ht5=this.getHiddenTiles(16, 28, -4);
        const ht6=this.getHiddenTiles(-66, -100, -4);
        const ht7=this.getHiddenTiles(-113, 18, -4);
        const ht8=this.getHiddenTiles(-5, -54, -4);
        const ht9=this.getHiddenTiles(33, -20, -4);
        const ht10=this.getHiddenTiles(-49, -26, -4);

        ht1.alt='1';
        ht1.crowMoves = [ht4, ht5];
        ht1.vultureMoves = [ht4, ht5, ht9, ht10];
        ht2.alt='2';
        ht2.crowMoves = [ht8, ht9];
        ht2.vultureMoves = [ht8, ht9, ht5, ht10];
        ht3.alt='3';
        ht3.crowMoves = [ht5, ht9];
        ht3.vultureMoves = [ht5, ht9, ht8, ht4];
        ht4.alt='4';
        ht4.crowMoves = [ht1, ht7, ht5, ht10];
        ht4.vultureMoves = [ht10, ht5, ht7, ht1, ht3, ht6];
        ht5.alt='5';
        ht5.crowMoves = [ht1, ht4, ht3, ht9];
        ht5.vultureMoves = [ht4, ht9, ht3, ht1, ht2, ht7];
        ht6.alt='6';
        ht6.crowMoves = [ht8, ht10];
        ht6.vultureMoves = [ht8, ht10, ht4, ht9];
        ht7.alt='7';
        ht7.crowMoves = [ht4, ht10];
        ht7.vultureMoves = [ht4, ht10, ht8, ht5];
        ht8.alt='8';
        ht8.crowMoves = [ht6, ht10, ht9, ht2];
        ht8.vultureMoves = [ht10, ht9, ht6, ht2, ht3, ht7];
        ht9.alt='9';
        ht9.crowMoves = [ht2, ht8, ht5, ht3];
        ht9.vultureMoves = [ht8, ht5, ht2, ht3, ht1, ht6];
        ht10.alt='10';
        ht10.crowMoves = [ht6, ht8, ht4, ht7];
        ht10.vultureMoves = [ht8, ht4, ht6, ht7, ht1, ht2];
        
        this.hiddenTiles.add(ht1);
        this.hiddenTiles.add(ht2);
        this.hiddenTiles.add(ht3);
        this.hiddenTiles.add(ht4);
        this.hiddenTiles.add(ht5);
        this.hiddenTiles.add(ht6);
        this.hiddenTiles.add(ht7);
        this.hiddenTiles.add(ht8);
        this.hiddenTiles.add(ht9);
        this.hiddenTiles.add(ht10);

        //ht1 left ht4 right ht5 | 

        /* 7 crows */
        this.crowsAndVulture.add(this.getNewCrow(200, 0, 15));
        this.crowsAndVulture.add(this.getNewCrow(200, 12, 15));
        this.crowsAndVulture.add(this.getNewCrow(200, 24, 15));
        this.crowsAndVulture.add(this.getNewCrow(200, 36, 15));
        this.crowsAndVulture.add(this.getNewCrow(200, 48, 15));
        this.crowsAndVulture.add(this.getNewCrow(200, 60, 15));
        this.crowsAndVulture.add(this.getNewCrow(200, 72, 15));

        /* 1 vulture */
        this.vulturePlayer = this.getVulture(200, -48, 15);
        this.crowsAndVulture.add(this.vulturePlayer);

        this.board.add(this.hiddenTiles);
        this.board.add(this.crowsAndVulture);
    }

    getHiddenTiles(x, y, z){
        const htGeometry = new THREE.BoxGeometry(20, 20, 100);
        const htMaterial = new THREE.MeshToonMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
        });
        const ht = new THREE.Mesh(htGeometry, htMaterial);
        ht.visible = false;
        ht.position.x = x;
        ht.position.y = y;
        ht.position.z = z; 
        ht.x = x;
        ht.y = y;
        ht.z = z;
        ht.isOccupied = false;
        ht.currPlayer = undefined;
        return ht;
    }

    getNewCrow(x, y, z){
        const htGeometry = new THREE.SphereGeometry(10,20,20);
        const htMaterial = new THREE.MeshToonMaterial({
            color: 0x66F29D,
            side: THREE.DoubleSide,
        });
        const ht = new THREE.Mesh(htGeometry, htMaterial);
        ht.position.x = x;
        ht.position.y = y;
        ht.position.z = z; 
        ht.x = x;
        ht.y = y;
        ht.z = z;
        ht.player = 'crow';
        ht.nextMoves = [];
        ht.currPos = undefined;
        return ht;
    }

    getVulture(x, y, z){
        const htGeometry = new THREE.SphereGeometry(11,20,20);
        const htMaterial = new THREE.MeshToonMaterial({
            color: 0xE58787,
            side: THREE.DoubleSide,
        });
        const ht = new THREE.Mesh(htGeometry, htMaterial);
        ht.position.x = x;
        ht.position.y = y;
        ht.position.z = z; 
        ht.x = x;
        ht.y = y;
        ht.z = z;
        ht.player = 'vulture';
        ht.nextMoves = [];
        ht.currPos = undefined;
        return ht;
    }

}
