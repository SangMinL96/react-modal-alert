# React Drag and Drop Images

[![Version](http://img.shields.io/npm/v/react-modal-alert.svg)](https://www.npmjs.org/package/react-modal-alert)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/react-modal-alert.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-modal-alert

react-modal-alert library.

## Demo

<!-- [![Edit react-modal-alert](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-modal-alert-m5lye2?file=/src/App.js) -->

## Installation

Install it from npm (using [NPM](http://webpack.github.io/)).

```bash
npm i --save react-modal-alert
```

or:

```bash
yarn add react-modal-alert
```

## Usage

Using react modal alert hook!!

```jsx static
import React, { useState } from 'react';
import  useButtonAlert  from 'hooks/useButtonAlert';

function Page() {
    const { AlertContainer, modalAlert, setIsStart } = useButtonAlert();
    const onClick = async () => {
        modalAlert({
          start: true,
          body: <div>custom body</div>,
          button: <div onClick={()=>setIsStart(false)}>custom button</div>
        });
    };
  return (
    <div>
      <div>
        <button type='button' onClick={onClick}>
          modal-alert-test-button
        </button>
      </div>
      {AlertContainer({
        isFirstRender: true,
        autoClose: 3000,
        body: <div>React-modal-alert Hook!!</div>,
        alertStyle: { borderRadius: '8px' },
      })}
    </div>
  );
}

```

## Options
```jsx static
   AlertContainer({
    body: null || <div></div> || <BodyComponent />, //default: null(required)
    isFirstRender?: true | false, //default: false
    autoClose?: 3000, //default null
    button?: null || <div></div> || <ButtonComponent />, //default: null
    alertStyle?: {height:300,width:300},  //inline css styles,
    containerStyle?: {position: 'fixed'}, //inline css styles,
    zIndex?: 999, // default: 999
    backGroundColor?: '#020202' //default: rgba(0, 0, 0, 0.5)
   })
```

```jsx static
    modalAlert({
      start: true, //only true
      body?:  null || <div></div> || <BodyComponent />, //default: parent (AlertContainer({body}))
      button?: null || <div></div> || <ButtonComponent />,  //default: parent (AlertContainer({button}))
      autoClose?: null,  //default: parent (AlertContainer({autoClose}))
    });
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
