import { Runtime } from "@robb_j/gamedoy";
import { Application, Sprite, Texture, Text } from "pixi.js";

import beanUrl from "./assets/bean.png";

// 
// Game constants, its nice to declare these in the same place so you can tweak them easily
// 
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;
const SPEED = 100;

// NOTE:  This is a JSDoc definition for our State to help the IDE make suggestions and code completions.
//        Make sure to update it as your state changes!
/**
 * @typedef {object} State
 * @property {Application} app
 * @property {Sprite} player
 * @property {Text} label
 * @property {string} phase
 * @property {number} score
 * @property {Record<string,Texture>} assets
 */

/**
 * @param {Runtime} runtime
 */
export async function setup(runtime) {
  // Create the Pixi.js Application
  const app = new Application({
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: "#334",
  });

  // Load in textures
  const assets = {
    bean: await Texture.fromURL(beanUrl),
  };

  // Create player and add them to the stage
  const player = new Sprite(assets.bean);
  player.anchor.set(0.5, 0.5);
  player.position.set(GAME_WIDTH / 2, GAME_HEIGHT / 2);
  app.stage.addChild(player);

  const label = new Text("", {
    fill: 'white',
    fontSize: 22
  });
  label.position.set(8, 8);
  app.stage.addChild(label);

  // Create the game state
  const state = {
    app,
    player,
    assets,
    label,
    phase: "walk",
    score: 0,
  };

  // Setup the screen and controls,
  // in a way that cleans up after itself when the game is over
  runtime.disposables.add(
    runtime.setDisplay(app.renderer.view),
    runtime.controls.onKeyUp("A", () => jump(state))
  );

  // Return the state for gamedoy
  return state;
}

/**
 * This method is called when the player pressed "A"
 * It updates the `phase` so it can only be called once.
 * It does the _jump_ then returns to the walking state
 * @param {State} state 
 */
function jump(state) {
  if (state.phase == "jump") return;
  state.phase = "jump";
  state.score += 1;
  setTimeout(() => {
    state.phase = "walk";
  }, 1_000);
}

/**
 * This method is run each frame of the game, up-to 60 frames per second.
 * You have access to your `state` from your `setup` method to observer or mutate it.
 * To make motion smooth think about multiplying your speed by `dt` to keep it frame-rate independant.
 *
 * @param {Runtime<State>} runtime
 * @param {number} dt
 */
export function update(runtime, dt) {
  // Grab some variables for easier access
  const { state, controls } = runtime;

  // Update the score label with the current value
  state.label.text = `Score: ${state.score}`;

  // Handle the 'walking' phase
  if (state.phase == "walk") {
    
    // Move up/down/left/right if the corresponding button is being pressed
    if (controls.state.LEFT) {
      state.player.position.x -= SPEED * dt;
    }
    if (controls.state.RIGHT) {
      state.player.position.x += SPEED * dt;
    }
    if (controls.state.UP) {
      state.player.position.y -= SPEED * dt;
    }
    if (controls.state.DOWN) {
      state.player.position.y += SPEED * dt;
    }
    // Rotate the player to show we're ... walking
    state.player.rotation += 10 * dt;
  } 
  
  // Handle the 'jumping' phase
  if (state.phase === 'jump') {
    // Spin faster in the other direction
    state.player.rotation -= 50 * dt;
  }
}

/**
 * @param {Runtime<State>} runtime
 */
export function teardown(runtime) {
  // (optional) Clean up here
}
