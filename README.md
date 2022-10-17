### KAOOA BOARD GAME(3D)
	1. This Project is done using Reactjs and THREE.js. The instructions to run the game is given below.
	   

### Run the Game

    1. Used Reactjs to implement the project (Vite was used for development)
    2. THREE.js library is used for this project
    3. To run open Kaooa folder in terminal and install the dependencies by running the command "npm install"
    4. Now run the code using "npm run dev"
    5. Go to the localhost address shown in the terminal to play the game
    6. The game rules are 	as follows:
            6.1 Crows start the game(7 blue spheres)
            6.2 Only one vulture(pink sphere)
            6.3 A crow can only move to its adjacent positions
            6.4 Vulture can only move to its adjacent positions. But
                if a crow is in a vultures adjacent position and if the vulture
                can cross the crow in a straight line to another position, then
                the vulture can do it (its not compulsory the player can also miss this possibility).
            6.5 The crow is killed when a vulture crosses it.
            6.6 The vulture wins if it makes 4 kills.
            6.7 The crows win if it can block the vulture from moving anywhere.
            
### Capture and Log Mouse Events

    As soon as the game ends and either the crow/vulture wins a file is downloaded
    which contains the mouse events of the entire game. Or we can click the Download Events link during the game for the same.
