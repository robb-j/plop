import { Gamedoy, bootScene } from '@robb_j/gamedoy'
import * as gameScene from './game.js'

// 
// The entry point to the web application
// 
async function main() {
  // Setup Gamedoy and grab the custom element
  const gamedoy = Gamedoy.setup({ el: '#app' })

  // Run the boot scene
  await gamedoy.run(bootScene, {
    title: 'Working title',
    version: '0.0.0'
  })
  
  // Run our game
  await gamedoy.run(gameScene)
}

main()
