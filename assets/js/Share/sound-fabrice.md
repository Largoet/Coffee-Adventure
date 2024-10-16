# Module sound-manager.js

## Sommaire

- [Côté HTML](<#côté-html>)

- [Côté CSS](<#côté-css>)

- [Côté JS](<#côté-js>)

## Côté HTML [^](#sommaire)

Dans votre fichier `html` principal, placer le code suivant juste avant la baslise fermante `body` :

```javascript
<!-- =================== SOUND SETTING =================== -->
<section id="setting-panel">
  <section class="panel-setting">
    <div>
      <h3>Paramètres de la musique</h3>
      <button id="close">&times;</button>
    </div>
    <p id="sound-level"></p>
    <section>
      <button id="set-volume-low">-</button>
      <button id="set-volume-high">+</button>
    </section>
    <button id="set-pause-music">Pause</button>
  </section>
</section>
```

## Côté CSS [^](#sommaire)

Dans votre fichier `css` principal, placer le code suivant :

```javascript
#setting-panel {
  grid-area: 2/2/3/3;
  justify-self: center;
  align-self: center;
  visibility: hidden;
  width: 90%;
  height: 100%;
  padding: 2%;
  border: 3px solid var(--polygon-fill);
  border-radius: 15px;
  color: white;
  background-color: var(--primary-color-inventory);
  z-index: 2;
}

.panel-setting {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}

.panel-setting button {
  width: 60px;
  height: 30px;
}

.panel-setting>div {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  font-size: var(--font-size-small);
}

#sound-level {
  font-size: var(--font-size-small);
}
```

## Côté JS [^](#sommaire)

Dans votre fichier `js` principal, placer le code suivant tout en haut du fichier :

```javascript
<!-- Placer tout en haut du fichier script principal -->
import {soundManager} from './sound-manager.js';
```

Puis placer ce code dans le fichier script principal :

```javascript
window.addEventListener('load', () => {
  soundManager.keydownManager();
  soundManager.clickManager();
})
```
