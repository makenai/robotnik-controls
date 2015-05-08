# Robotnik-Controls

This is an adaptive control library for nodebots. It's used by [robotnik](https://github.com/makenai/robotnik) to listen for control events. Right now it only listens for events via IPC message, but the goal is that you'll be able to drop in a single library to provide the same control interface via:

- Console keyboard commands using [keypress](https://www.npmjs.com/package/keypress)
- In-browser keyboard commands for [Chromebots](http://iceddev.com/blog/chromebots-lowering-the-barrier-to-entry/)
- IPC commands sent via the native version of [robotnik](https://github.com/makenai/robotnik)
- Plugged in video game controllers??
- LEAP motion??

Let's see where this goes.

## Usage

button_demo.js

```javascript
var button = require('robotnik-controls');

button.on('up', function() {
  console.log('Up was pressed');
});

button.off('up', function() {
  console.log('Up was released');
});
```

## Supported buttons

There isn't really a definitive list, but currently robotnik uses:

```
up, down, left, right, red, green
```

## Triggering events



```javascript
var button = require('robotnik-controls');

button.off('up', function() {
  console.log('Up button was released.');
});

button.trigger('up', 'up'); // Prints 'Up button was released.'
```

## Sending IPC commands

To send IPC control stats, you'll want to fork off a child and send it an object with ```button``` and ```state``` keys:

```javascript
var childProcess = require("child_process");

var child = childProcess.fork('./button_demo.js');

// 'press' the up key
child.send({ button: 'up', state: 'down' });

// 'release' the up key
child.send({ button: 'up', state: 'up' });
```
