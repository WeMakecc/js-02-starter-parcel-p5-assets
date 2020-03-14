# Javascript starter

This is a starter kit for Wemake Javascript course.

## Getting Started

This repository is a getting started with [p5](https://p5js.org/) and show how to load assets, like mp3 sound or images.

### Installing

Be sure to have node-js installed.

Download the repository at [https://github.com/wemake/starter-parcel](https://github.com/wemake/starter-parcel), unzip and open a terminal in the project directory.

```
npm install
```

### Usage

```
npm start
```

A local version will now be running on [localhost:1234](http://localhost:1234)

### Assets

- [Roboto font](https://fonts.google.com/specimen/Roboto) is loaded via google font cdn and CSS.
- Background image is loaded via [parcel asset loader](https://parceljs.org/assets.html) and passed to p5.

### Credits

The mp3 is from [https://freemusicarchive.org/genre/Ambient_Electronic](https://freemusicarchive.org/genre/Ambient_Electronic)

### Side notes

P5.sound module with parcel is loaded via `require`. For more information if you want to use `import` see [this asnwer on stackoverflow](https://stackoverflow.com/a/47984928/433685)
