# 📷 CSS-CAMERA

<!-- BADGES -->
![npm](https://img.shields.io/npm/v/css-camera?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/woodneck/css-camera?style=for-the-badge)

<p>
  <h4><a href="https://woodneck.github.io/css-camera">🎥 Demo</a> · <a href="https://woodneck.github.io/css-camera/release/latest/docs/index.html">📄 Document</a></h2>
</p>

<b>Add depth to your web page with CSS3 3D transform.</b>

> This project is mostly inspired by [Keith Clark's work](https://keithclark.co.uk/labs/css-fps/).

## ✨ Features
- Movable, and Rotatable camera for your scene.
- Can move to in front of any element in your scene, whether it has been rotated or translated.

## ⚙️ Installation
```sh
npm i css-camera
# or
yarn add css-camera
```

## 🏃 Quick Start
```js
// Prerequisite:
// Create your scene as you like
const card = document.querySelector("#card");
const cardButton = document.querySelector("#card-button");

// First, make camera
const camera = new CSSCamera("#space");

// Call its method, then update it!
cardButton.onclick = () => {
  camera.focus(card);
  camera.update(2000);
}
```
Check more methods on the <a href="https://woodneck.github.io/css-camera/release/latest/docs/index.html">📄API Documentation</a> page</h2>

## 📜 License
[MIT](https://github.com/WoodNeck/css-camera/blob/master/LICENSE)
