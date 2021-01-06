# Belshop

## Getting started

First things first, clone the project.

`git clone https://code.nodo.cc/belshop/frontend.git`

### Prerequisites

To run this project you must have:

* node 10.16.0
* npm 6.9.0
* xcode 10.2.1

### Installing & Running

Install node and watchman

`brew install node`
`brew install watchman`
`brew tap AdoptOpenJDK/openjdk`
`brew cask install adoptopenjdk8`

React Native CLI

`npm install -g react-native-cli`

Xcode

[To install by App Store, Click here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)

Android Studio

[To install, Click here (Mac)](https://dl.google.com/dl/android/studio/install/3.5.0.21/android-studio-ide-191.5791312-mac.dmg)

In the root of project

`npm install`

Inside path `ios` run:

`pod install`

Done. Still in root of project, run:

`npm start`

Otherwise, you can also:

for **ios** run:

`npm run ios` or
Run `npm start-react` and open your Xcode, click in `Open another project`. Open the path `./ios` and run.

for **android** run:

`npm run android` or
Run `npm start-react` and open you Android Studio, click in `Open an existing Android Studio project`. Open the path `./android/app` and run.

Note: to run Android you must have the debug keystore. Follow the `Generate Keystores (android)` section below.

## Development

The simplest way to run the project is by just running `npm start`. Then you can select the platform and the environment which you want to run.

But, you can also use this command format: `npm run <environment>:<platform>`.

The possible environments are: `dev`, `qa`, `staging` or `prod`.

The possible platforms are: `ios` or `android`.

An example: `npm run qa:ios`

Note: The scripts `npm run ios` and `npm run android` will run as a development environment. In other words, they are a shortcut to `npm run dev:ios` and `npm run dev:android`.

## Deployment

**🚨 TO DEPLOY YOU SHOULD NOT BUILD VIA XCODE/ANDROID STUDIO 🚨**

As the environment is set with a NPM script, if you build without following the next instructions, the environment will **NOT** change automatically.

Building via xcode or Android Studio, you **MUST** set the environment manually:
* Create a file named `env.js` inside `src`;
* This file must export the environment in a string, so it will look like this:
```javascript
module.exports = 'Dev';
```
* The environments string must be one of: `Dev`, `Qa`, `Staging` or `Prod`.

---

### Before anything

To deploy the Android app, you must have the release keystore. Follow the `Generate Keystores (android)` section below.

If you want to generate a release to Google Console deploying the Android App, you may need to remove the gradle's cache:
* `rm -rf ~/.gradle/caches/*`
* `rm -rf ./android/.gradle`
* `rm -rf ./android/app/build`

### For Both Platforms

The simplest way is by just running `npm start`. So, you can select the platform to build and the respective parameters.

If you want to go for a more detailed process, you can also:

### For iOS

You can archive and export the IPA file with this command format: `npm run build:<environment>:ios`.

Instead of using the exported IPA file, you can also open the xcode and go to the Organizer Window to distribute the app using the archive generated with this command.

You can find the output in `ios/build`.

### For Android

You can generate the APK file with this command format: `npm run build:<enviroment>:android`.

Or even generate the Bundle file for production with this command: `npm run bundle:prod:android`.

You can find both outputs in `android/app/build/outputs`.

## Generate Keystores (android)

Open the path `android/app` and run

`keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`

and after

`keytool -genkey -v -keystore release.keystore -storepass nodo123 -alias release-key -keypass nodo123 -keyalg RSA -keysize 2048 -validity 10000`.

## Generate Bundles

### Android

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

### iOS

`react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios`
