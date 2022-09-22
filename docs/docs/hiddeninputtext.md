## Introduction

An invisible Input DOM element to 
receive character input and display on [text](text.md), [bbocodetext](bbcodetext.md), or [tagtext](tagtext.md).

Inspirited from [CanvasInput](https://goldfirestudios.com/canvasinput-html5-canvas-text-input).

- Author: Rex

## Live demos

- [With Text](https://codepen.io/rexrainbow/pen/WNXxEMV)
- [With BBCodeText](https://codepen.io/rexrainbow/pen/YzEWrzR)
- [With rexui-Label](https://codepen.io/rexrainbow/pen/MWOjJzZ)
- [Number input](https://codepen.io/rexrainbow/pen/NWyvJmz)

## Usage

[Sample code](https://github.com/rexrainbow/phaser3-rex-notes/tree/master/examples/hiddeninputtext)

### Install plugin

#### Load minify file

- Load plugin (minify file) in preload stage
    ```javascript
    scene.load.plugin('rexhiddeninputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexhiddeninputtextplugin.min.js', true);
    ```
- Add input-text object
    ```javascript
    var hiddenInputText = scene.plugins.get('rexhiddeninputtextplugin').add(textGameObject, config);
    ```

#### Import plugin

- Install rex plugins from npm
    ```
    npm i phaser3-rex-plugins
    ```
- Install plugin in [configuration of game](game.md#configuration)
    ```javascript
    import HiddenInputTextPlugin from 'phaser3-rex-plugins/plugins/hiddeninputtext-plugin.js';
    var config = {
        // ...
        plugins: {
            global: [{
                key: 'rexHiddenInputTextPlugin',
                plugin: HiddenInputTextPlugin,
                start: true
            },
            // ...
            ]
        }
        // ...
    };
    var game = new Phaser.Game(config);
    ```
- Add input-text object
    ```javascript
    var hiddenInputText = scene.plugins.get('rexHiddenInputTextPlugin').add(textGameObject, config);
    ```

#### Import class

- Install rex plugins from npm
    ```
    npm i phaser3-rex-plugins
    ```
- Import class
    ```javascript
    import HiddenInputText from 'phaser3-rex-plugins/plugins/hiddeninputtext.js';
    ```
- Add input-text object
    ```javascript    
    var hiddenInputText = new HiddenInputText(textGameObject, config);
    ```

!!! note

    Don't add this game object into scene

### Add input text object

```javascript
var hiddenInputText = scene.plugins.get('rexHiddenInputTextPlugin').add(textGameObject, {
    type: 'text',    // 'text'|'password'|'textarea'|...

    cursor: '|',
    cursorFlashDuration: 1000,

    // updateTextCallback: undefined,
    // updateTextCallbackScope: undefined,
    
    // enterClose: true,

    // onOpen: undefined,
    // onClose: undefined,
    // onUpdate: undefined,
});
```

- `textGameObject` : 
- `type` : Type of element
    - `'text'`, `'password'`, `'textarea'`, ...
- `cursor` : Cursor character used in default update text callback.
    - `null`, or `''` : Don't insert cursor character.
- `cursorFlashDuration` : Display cursor character or a space string to create a flash cursor.
- `enterClose` : Set `true` to close input text when enter-key was pressed. Default value is true.
- `onOpen` : Callback invoked when focus on this hidden input text.
    ```javascript
    function (textObject, hiddenInputText) {
    }
    ```
- `onClose` : Callback invoked when blur.
    ```javascript
    function (textObject, hiddenInputText) {
    }
    ```
- `onUpdate` : 
    - A callback invoked in each tick of editing.
        ```javascript
        function (text, textObject, hiddenInputText) {
            // return text;
        }
        ```
        - Can return a new string for text game object displaying.
    - `'number'` : Only output number string.

!!! note

    This hiddenInputText will be destroyed when `textGameObject` is destroyed.

### Custom class

- Define class
    ```javascript
    class MyHiddenText extends HiddenInputText {
        constructor(textGameObject, config) {
            super(textGameObject, config) {
            // ...            
        }
        // ...

        // preUpdate(time, delta) {}
    }
    ```
    - `scene.add.existing(gameObject)` : Adds an existing Game Object to this Scene.
        - If the Game Object renders, it will be added to the Display List.
        - If it has a `preUpdate` method, it will be added to the Update List.
- Create instance
    ```javascript
    var hiddenInputText = new MyHiddenText(textGameObject, config);
    ```

### Cursor

- Set
    ```javascript
    hiddenInputText.setCursor(s);
    ```
- Get
    ```javascript
    var cursor = hiddenInputText.cursor;
    ```

### Open editor

```javascript
hiddenInputText.open();
```

Equal to `hiddenInputText.setFocus()`

### Close editor

```javascript
hiddenInputText.close();
```

Equal to `hiddenInputText.setBlur()`;

#### Is opened

```javascript
var isOpened = hiddenInputText.isOpened;
```

Equal to `hiddenInputText.isFocused`

### Select text

This feature does not support.

### Events

See [InputText/Event](inputtext.md#events)

### Bypass key input

See [InputText/Bypass key input](inputtext.md#bypass-key-input)

### Other properties

See [InputText](inputtext.md)