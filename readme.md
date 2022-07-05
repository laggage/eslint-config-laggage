## Usage

Install peer dependencies

```
npm i -D typescript eslint prettier-
```

Create `.prettierrc.js` and `.eslintrc.js` files to the root of the project

```shell
touch .prettierrc.js && touch .eslintrc.js
```

<details open>
<summary>.eslintrc.js</summary>

```javascript
module.exports = {
    extends: ['./node_modules/eslint-config-laggage/index.js'],
};
```
</details>

<details open>
<summary>.prettierrc.js</summary>

```javascript
module.exports = {
    ...require('eslint-config-laggage/prettier'),
};
```
</details>

Use `.*.js` as the configuration file so that it's possible and easy to override th configuration in these two files.

For example, to override `tabWith` option to 2 of prettier, just modify .prettierrc.js like below

```diff
module.exports = {
    ...require('eslint-config-laggage/prettier'),
+   tabWith: 2
};
```
