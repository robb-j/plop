# Gamedoy starter

This repository is a template for getting started with [Gamedoy](https://gamedoy.r0b.io/) with [Pixi.js](https://pixijs.com/) as the rendering engine.

Gamedoy is a little framework for creating games on the web that look kind of like a Gameboy.
It sets up a nice frame for the game and provides utilities for loading and handling scenes.
[More about Gamedoy →](https://gamedoy.r0b.io/).

Pixi.js is a web rendering engine for creating and managing 2d graphics.
It does things like loading textures, managing sprites and using shaders.
[More about Pixi.js →](https://pixijs.com).

The template also uses [Parcel.js](https://parceljs.org/) as a web bundler and local development server.
It is set up to run a local server that serves your game with hot-reloading by default.

## Using the template

This repo is a `template` on GitHub.com so you can quickly fork it and use it to get a game up and running to play about with.
Once you have used the template you will have your own git repository with the contents of all the files in this starter repo.

## Template structure

These are the important files in the repository:

### `index.html`

This is the entry point to the web app, Parcel is pointed at this and it looks through all the dependencies it finds to construct the application and so it knows which files to watch and restart the local server.

### `main.js`

This serves as the application entry point, loaded by `index.html` it sets up Gamedoy on the page and loads in the `game.js` scene.

### `game.js`

This is a template to hack about for your game. Everything in there serves as an example for how to structure your game.
It is a scene in gamedoy so the exported `setup`, `update` and `teardown` methods are called by Gamedoy when the scene is loaded.
This _could_ be TypeScript, if you're that way inclined, but it has rough JSDoc types to help in your IDE for this example.
The key points are:

- `setup` is called to start the game and it returns the **state** which is common storage for your game. [Docs →](https://gamedoy.r0b.io/game-dev#setup)
- `update` is called every frame to perform logic and has your **state** to watch and mutate as you like. [Docs →](https://gamedoy.r0b.io/game-dev#update)
- `teardown` is called when the game is finished. [Docs →](https://gamedoy.r0b.io/game-dev#teardown)

> If you want things to be cleaned up automatically, check out [disposables](https://gamedoy.r0b.io/game-dev/#disposables).

This example game

### `assets/`

 is a nice place to put static assets you reference in your code.

## Development

To work on the repo, you'll need to have it checked out on you development machine and have an [Node.js LTS](https://nodejs.org/en) installed.
Once you have those, open up a terminal and navigate to the folder you checked out the repository to.

```bash
# cd to/this/repository

# The first time you setup the repo, you need to install the NPM dependencies
# -> This dumps a load of external JavaScript files into "node_modules"
npm install

# More regularly, you just need to run the "start" script
# -> This runs parcel in development mode
# -> It runs a local server on http://localhost:1234
# -> Open this URL in your browser to see your game!
# -> The server hot-reloads, which means it sees changes to your files and refreshes your browser page automatically
npm run start
```

## Docs

- [Gamedoy](https://gamedoy.r0b.io)
- [Pixi.js](https://pixijs.com/guides)
- [Parcel.js](https://parceljs.org/)

For more stuff, get in touch with [@robb-j](https://github.com/robb-j?tab=repositories) who'll be happy to help.

Happy hacking!
