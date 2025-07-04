<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-helper-utils
- Package name: @m-shum/nuxt-helper-utils
- Description: My new Nuxt module
-->

# My Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

`nuxt-helper-utils` is a small module of common methods such as checking if an array or object has valid entries, or if a number or string is non-nullish. Because I am lazy and hate copy-pasting, I decided to publish it as a module for my own personal use.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-helper-utils?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ✨ Plug-and-play thanks to Nuxt auto-imports
- ✨ Handy for validating external data from third-party CMSs
- ✨ Basic af – you provide an argument; functions provide a boolean.

## Quick Setup

Installation

```bash
npm i @m-shum/nuxt-helper-utils
```

Setup

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@m-shum/nuxt-helper-utils',
  ],
})
```


## Usage
The module (currently) provides the following methods:
| Method | Params | Type | Description |
| --- | --- | --- | --- |
| `arrHasEntries()` | Value: required | any | Returns `true` if the argument provided is a non-empty array where at least one value is non-nullish.<br>Returns `false` if the argument is not an array, or if the array is empty, or if all of the array's values are nullish. |
| `numHasValue()` | Value: required, Strict: optional (default: false) | any, boolean | `strict: false` (default): This method will return `true` if the argument passed is a valid non-nullish number or number string, and `false` if the argument is not a number/number string, or a number/number string that is <=0. This is useful when evaluating inputs like query parameters where the value could be a string or a number.<br>`strict: true` : This method will return `false` for number strings. Set `strict` to true for explicit typechecking. |
| `objHasEntries()` | Value: required | any | Returns `true` if the argument passed is an object with non-nullish entries.<br> Returns `false` if the argument passed is not an object, or is an empty object, or is a non-empty object with only nullish values. |
| `strHasValue()` | Value: required | any | Returns `true` if argument passed is a non-empty string .<br> Returns `false` if the argument passed is not a string, or is an empty string. |

<br>

These methods are auto-imported by the module. To use them, simply call the method as needed either in the script or the template. For example:

```vue
<script setup lang='ts'>
const { data } = await useFetch('some/endpoint')
const hasRouteQuery = strHasValue(useRoute().query.key)
</script>
<template>
<div v-if="isNonEmptyObject(data?.content)">
  <!-- Content -->
   <menu v-if="hasRouteQuery">
    <!-- Conditional content -->
   </menu>
</div>
</template>
```





## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-helper-utils/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-helper-utils

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-helper-utils.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-helper-utils

[license-src]: https://img.shields.io/npm/l/nuxt-helper-utils.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-helper-utils

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
