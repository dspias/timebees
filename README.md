
# Timebees 

Timebees a google chrome extension created for translate diffrent region time to local time. The project basically depends on HTML, CSS, Javascript. We used React.js as Javascript library to build js files. In adition, we used webpack for build the files and yarn for package manager.

## Document Structure
* [Technoloiges](#technoloiges)
* [File Structure](#file-structure)
* [Deployment](#deployment)
* [Available Scripts Descriptions](#available-scripts-descriptions)


## Technoloiges
* [React.js](https://react.dev/) [Clean version `18.2.0`]
* [Webpack.js](https://webpack.js.org/) [Clean version `5.39.1`]
* [TypeScript](https://www.typescriptlang.org/) [Core version `4.4.2`]
* [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted)
* [Chrome Extensions React Boilerplate](https://github.com/lxieyang/chrome-extension-boilerplate-react)

## File Structure
```
.
├── build
├── package.json
├── public
├── src
├── tsconfig.json
├── README.md
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

## Available Scripts Descriptions

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
