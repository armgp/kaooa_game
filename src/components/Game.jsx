import * as THREE from "three";
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { useEffect } from "react";

import SceneController from "../utils/SceneController";
import KaooaBoard from "./KaooaBoard";
import PlayerBoard from "./PlayerBoard";
import WinnerBoard from "./WinnerBoard";
import StartBoard from "./StartBoard";

var mouseEvents = [];
  
function exportMouseInfo() {
    const fileData = JSON.stringify(mouseEvents);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "mouse_events.json";
    link.href = url;
    link.click();
}


export default function Game() {
    const canvasId = "kaooaCanvas";
    const bgcolor = "#000000";
    useEffect(()=>{
        /* ----------game scene and board init---------- */
        const game = new SceneController(canvasId, bgcolor);
        game.initScene();
        game.animate();

        const kboard = new KaooaBoard();
        var playerBoard = new PlayerBoard('CROW\'S TURN');

        const directionalLight3 = new THREE.DirectionalLight(0x8F35C2, 1);
        const directionalLight1 = new THREE.DirectionalLight(0x29C29E, 1);
        const directionalLight2 = new THREE.DirectionalLight(0xC91111, 1);
        directionalLight2.position.set(1, 0, 0);
        directionalLight3.position.set(0, 0, 1);
        // const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.4);
        // game.scene.add(light);
        game.scene.add(directionalLight1);
        game.scene.add(directionalLight2);
        game.scene.add(directionalLight3);

        window.localStorage.clear();
        var gameStarted = false;
        var i=0;
        
        game.scene.add(new StartBoard().board);

        const listener = new THREE.AudioListener();
        game.camera.add(listener);
    
        const audioLoader = new THREE.AudioLoader();

        const startkaooa = new THREE.Audio(listener);
        audioLoader.load('src/assets/startkaooa.mp3', (buffer) => {
            startkaooa.setBuffer(buffer);
            startkaooa.setLoop(false);
            startkaooa.setVolume(1.0);
        });

        const crowswon = new THREE.Audio(listener);
        audioLoader.load('src/assets/crowswon.mp3', (buffer) => {
            crowswon.setBuffer(buffer);
            crowswon.setLoop(false);
            crowswon.setVolume(1.0);
        });

        const killcrow = new THREE.Audio(listener);
        audioLoader.load('src/assets/killcrow.mp3', (buffer) => {
            killcrow.setBuffer(buffer);
            killcrow.setLoop(false);
            killcrow.setVolume(1.0);
        });

        const movecorrect = new THREE.Audio(listener);
        audioLoader.load('src/assets/movecorrect.mp3', (buffer) => {
            movecorrect.setBuffer(buffer);
            movecorrect.setLoop(false);
            movecorrect.setVolume(1.0);
        });

        const movewrong = new THREE.Audio(listener);
        audioLoader.load('src/assets/movewrong.mp3', (buffer) => {
            movewrong.setBuffer(buffer);
            movewrong.setLoop(false);
            movewrong.setVolume(1.0);
        });

        const vulturewon = new THREE.Audio(listener);
        audioLoader.load('src/assets/vulturewon.mp3', (buffer) => {
            vulturewon.setBuffer(buffer);
            vulturewon.setLoop(false);
            vulturewon.setVolume(1.0);
        });

        const onMouseClick = (event) => {
            mouseEvents.push([`MouseEvents${i}`, "clicked"]);
            i++;
            if(!gameStarted){
                startkaooa.play();
                gameStarted = true;
                game.scene.remove(game.scene.children[3]);
                game.scene.add(kboard.board);

                const grow = (object) => {
                    if(object.scale.x<1) object.scale.x+=0.04;
                    if(object.scale.y<1) object.scale.y+=0.04;
                    if(object.scale.z<1) object.scale.z+=0.04;
                }

                var growthIndex = 0.0002;
                const animateEntry = () => {
                    if(kboard.board.scale.x < 1) {
                        kboard.board.scale.x+=growthIndex;
                        kboard.board.rotation.z += 0.03;
                    }
                    if(kboard.board.scale.y < 1) kboard.board.scale.y+=growthIndex;
                    if(kboard.board.scale.z < 1) kboard.board.scale.z+=growthIndex;
                    growthIndex*=2;
                    requestAnimationFrame(animateEntry);
                };
                
                const animateBoard = () => {
                    if(kboard.board.scale.x < 1) {
                        kboard.board.rotation.z += 0.003;
                        requestAnimationFrame(animateBoard);
                    }
                };
                
                animateBoard();
                animateEntry();
                game.scene.add(playerBoard.board);
            }
        }
        window.addEventListener("click", onMouseClick, false);
        
        /* ----------mouse controls---------- */
    
        const controls = new DragControls(kboard.crowsAndVulture.children, game.camera, game.renderer.domElement);

        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        var currDraggedObj;
        var crowsTurn = true;
        var vulturePlayer = kboard.vulturePlayer;
        var killedPosX = -300;
        var vultureKills=0;

        controls.addEventListener('dragstart', (event)=>{
            mouseEvents.push([`MouseEvents${i}`, "drag started"]);
            i++;
            if((crowsTurn && event.object.player=='crow') || (!crowsTurn && event.object.player=='vulture')){
                currDraggedObj = event.object;
            }
            else {
                currDraggedObj = undefined;
            }
        });

        controls.addEventListener('dragend', (event)=>{
            mouseEvents.push([`MouseEvents${i}`, "drag ended"]);
            i++;
            event.object.position.x=event.object.x;
            event.object.position.y=event.object.y;
            event.object.position.z=event.object.z;
        });

        const onMouseUp = (event) => {
            mouseEvents.push([`MouseEvents${i}`, "mouse up"]);
            i++;
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, game.camera);
            const intersects = raycaster.intersectObjects(kboard.hiddenTiles.children);
            if(intersects.length>0 && !intersects[0].object.isOccupied){
                var allNextMoves = [];
                if(currDraggedObj.nextMoves) allNextMoves = currDraggedObj.nextMoves;
                var n = allNextMoves.length;
                var nextMoves = allNextMoves;
                var isMovePossible = true;

                if(currDraggedObj.player == 'vulture' && nextMoves.length!=0) nextMoves = nextMoves.slice(-1*n, -2);

                if(nextMoves.length!=0){
                    isMovePossible = false;
                    nextMoves.forEach((obj) => {
                        if(obj.uuid === intersects[0].object.uuid) {
                            isMovePossible = true;
                        }
                    });
                }

                if(!isMovePossible && currDraggedObj.player=='vulture'){
                    var killMoves = allNextMoves.slice(-2);
                   
                    isMovePossible = false;
                    for(var i=0; i<2; i++){
                        var obj = killMoves[i];
                        if(obj.uuid === intersects[0].object.uuid){
                            if(i==0 && nextMoves[1].isOccupied){
                                killcrow.play();
                                nextMoves[1].isOccupied = false;
                                nextMoves[1].currPlayer.position.x = killedPosX;
                                killedPosX+=10;
                                nextMoves[1].currPlayer.position.y = -25;
                                vultureKills++;
                                isMovePossible = true;
                            }else if(i==1 && nextMoves[0].isOccupied){
                                killcrow.play();
                                nextMoves[0].isOccupied = false;
                                nextMoves[0].currPlayer.position.x = killedPosX;
                                killedPosX+=10;
                                nextMoves[0].currPlayer.position.y = -25;
                                vultureKills++;
                                isMovePossible = true;
                            }
                        }
                    }
                    
                }
                

                if(isMovePossible){
                    movecorrect.play();
                    currDraggedObj.position.x = intersects[0].object.x;
                    currDraggedObj.position.y = intersects[0].object.y;
                    currDraggedObj.x = intersects[0].object.x;
                    currDraggedObj.y = intersects[0].object.y;
                    intersects[0].object.isOccupied = true;
                    intersects[0].object.currPlayer = currDraggedObj;
                    if(currDraggedObj.currPos!=undefined){
                        currDraggedObj.currPos.isOccupied = false;
                    }
                    currDraggedObj.currPos = intersects[0].object;
                    if(currDraggedObj.player=='crow') currDraggedObj.nextMoves = intersects[0].object.crowMoves;
                    else currDraggedObj.nextMoves = intersects[0].object.vultureMoves;

                    if(!crowsTurn) {
                        game.scene.remove(playerBoard.board);
                        playerBoard = new PlayerBoard('CROW\'S TURN!');
                    }
                    else {
                        game.scene.remove(playerBoard.board);
                        playerBoard = new PlayerBoard('VULTURE\'S TURN');
                    }
                    game.scene.add(playerBoard.board);

                    crowsTurn = !crowsTurn;
                }else movewrong.play();

            }else movewrong.play();

            if(!crowsTurn && vulturePlayer.nextMoves.length!=0){
                var didCrowsWin = true;
                vulturePlayer.nextMoves.forEach((obj) => {
                    if(obj.isOccupied == false){
                        didCrowsWin = false;
                    }
                })
                if(didCrowsWin){ 
                    game.scene.remove(game.scene.children[3]); 
                    game.scene.remove(game.scene.children[4]); 
                    game.scene.remove(playerBoard.board);
                    game.scene.add(new WinnerBoard('CROWS').board);
                    window.addEventListener("mouseup", (event) => {
                        event.stopImmediatePropagation();
                    }, true);
                    crowswon.play();
                    exportMouseInfo();
                }
            }else if(crowsTurn){
                if(vultureKills == 4){
                    game.scene.remove(game.scene.children[3]); 
                    game.scene.remove(game.scene.children[4]); 
                    game.scene.remove(playerBoard.board);
                    game.scene.add(new WinnerBoard('VULTURE').board);
                    window.addEventListener("mouseup", (event) => {
                        event.stopImmediatePropagation();
                    }, true);
                    vulturewon.play();
                    exportMouseInfo();
                }
            }
            
        }
        window.addEventListener("mouseup", onMouseUp, false);

    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <canvas id={canvasId} />
        </div>
    );
}