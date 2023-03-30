
# Timebees 

Timebees a google chrome extension created for translate diffrent region time to local time. The project basically depends on HTML, CSS, Javascript. We used React.js as Javascript library to build js files. In adition, we used webpack for build the files and yarn for package manager.

## Document Structure
* [Technoloiges](#technoloiges)
* [File Structure](#file-structure)
* [Deployment](#deployment)
* [Secrets](#secrets)


## Technoloiges
* [React.js](https://react.dev/) [Clean version `17.0.2`]
* [Webpack.js](https://webpack.js.org/) [Clean version `5.39.1`]
* [Babel.js](https://babeljs.io/docs/) [Core version `7.14.6`]
* [TypeScript](https://www.typescriptlang.org/)
* [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted)
* [Chrome Extensions React Boilerplate](https://github.com/lxieyang/chrome-extension-boilerplate-react)

## File Structure
```
.
├── src
│   ├── assets
│   ├── components
│   ├── lib
│   ├── manifest.json
│   ├── pages
│   └── styles
├── utils
│   ├── build.js
│   ├── env.js
│   └── webserver.js
├── build
├── package.json
├── webpack.config.js
├── README.md
├── CHANGELOG.md
├── yarn.lock
└── LICENSE
```

## Installation
**1. Clone or download the repository and enter its folder**
```
git clone https://github.com/dspias/timebees.git your-app-folder
cd your-app-folder
```
**2. Run the installation script (it may take couple minutes)**
```
yarn
```
**3. Run the installation script (it may take couple minutes)**
```
yarn start
```
*[That's itHappy hacking.]*


## Deployment
```
yarn build
```

**Load Timebees extension on Chrome following:**
   ###### 1. Access `chrome://extensions/`
   ###### 2. Check `Developer mode`
   ###### 3. Click on `Load unpacked extension`
   ###### 4. Select the `build` folder.

**After the development of your extension run the command**

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Secrets

It's a good practice you not commit your secret keys and expose to anyone that have access to the repository.

Import the file `./secrets.<THE-NODE_ENV>.js` on your modules through the module named as `secrets`, so you can do things like this:

_./secrets.development.js_

```js
export default { key: "123" };
```

_./src/popup.js_

```js
import secrets from "secrets";
ApiCall({ key: secrets.key });
```

👉 The files with name `secrets.*.js` already are ignored on the repository.

