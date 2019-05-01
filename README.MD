# vue-a11y-click
It helps you handling click events on element which are not natively clickable - like `<img>` or `<div></div>`. This package provides custom directive which will add `tabindex` attribute to an element. Then it will trigger `click` event when focused and user press `enter`. In addition it will change `aria-pressed` property.



## Install
#### NPM
```shell
npm install -S vue-a11y-click
```

#### Yarn
```shell
yarn add vue-a11y-click
```

## How to use
In your `main.js`
```javascript
import Vue from 'vue'
import VueA11YClick from 'vue-a11y-click'

Vue.use(VueA11YClick)
```

Then you can use it in component
```vue
<template>
  <div 
    class="baseCard--clickable" 
    @click="handleClick" 
    v-a11y-click
  >
      <!-- clickable content -->
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  methods: {
    handleClick() {
      // ...
    }
  }
  //...
}
</script>
```

## Using with HTML files
```html
<body>
  <div id="app">

    <div 
      class="card" 
      @click="triggerPopup" 
      v-a11y-click
    >
      <!-- clickable content -->
    </div>
  </div>

  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-skip-to"></script>
  <script>
    Vue.use(VueSkipTo)
    new Vue({
      el: "#app",
    })

  </script>
</body>
</html>
```

## Roadmap

- [] Live demo
- [] E2E Tests
