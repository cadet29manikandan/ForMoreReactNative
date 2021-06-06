> # Note: Development is switched to [prscX/react-native-app-tour](https://github.com/prscX/react-native-app-tour)\*\*

> #### Migration is with respect to [ISSUE: 6](https://github.com/prscX/react-native-taptargetview/issues/6)

<p align="center">
  <img src="https://github.com/KeepSafe/TapTargetView/blob/master/.github/video.gif" width="280" height="498" alt="Video 1"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-taptargetview"><img src="http://img.shields.io/npm/v/react-native-taptargetview.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-taptargetview/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-taptargetview#License"><img src="https://img.shields.io/npm/l/react-native-taptargetview.svg?style=flat" /></a>
</p>

# React Native TapTargetView

React Native Bridge for [KeepSafe/TapTargetView](https://github.com/KeepSafe/TapTargetView)

Before we dive into on how to use this library. We would like to thank all the contributor of [KeepSafe/TapTargetView](https://github.com/KeepSafe/TapTargetView) for providing such a awesome nice, cool library

#### iOS Platform

Please refer [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios) for the iOS support

## Installation

* `$ npm install react-native-taptargetview --save`

* `$ react-native link react-native-taptargetview`

> **Note**
>
> * Android SDK 25 > is supported

## API's

* AppTourView.for: AppTourTarget

```
let appTourTarget = AppTourView.for(Button, {
    primary: 'This is a target button 1',
    description: 'We have the best targets, believe me'
})

AppTour.ShowFor(appTourTarget)
```

> **Note:** App Tour Target Properties are same as defined by [KeepSafe/TapTargetView](https://github.com/KeepSafe/TapTargetView)

* AppTourSequence
  * add(AppTourTarget)
  * remove(AppTourTarget)
  * removeAll
  * get(AppTourTarget)
  * getAll

```
let appTourSequence = new AppTourSequence()
this.appTourTargets.forEach(appTourTarget => {
appTourSequence.add(appTourTarget)
})

AppTour.ShowSequence(appTourSequence)
```

* AppTour
  * ShowFor(AppTourTarget)
  * ShowSequence(AppTourTargets)

# Breaking Changes

* **0.0.3**: Added Support for providing hex colors

* **0.0.2**: Changed API's to create same developer experience for both [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

# Contribution

Any type of contribution will be very much appreciated

# License

Copyright @2017 Pranav Raj Singh Chauhan

The React Native TapTargetView is provided under the MIT License.

## Other Contributions

| [awesome-react-native-native-modules](https://github.com/prscX/awesome-react-native-native-modules)                            |
| ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/prscX/awesome-react-native-native-modules/raw/master/assets/hero.png" width="600" height="300" /> |

| [react-native-spruce](https://github.com/prscX/react-native-spruce)                                                         |
| --------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif" width="600" height="300" /> |

| [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)                              |
| -------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif" width="600" height="600" /> |

| [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png" width="600" height="300" /> |

| [react-native-tooltips](https://github.com/prscX/react-native-tooltips)                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966" width="600" height="300" /> |

| [react-native-shine-button](https://github.com/prscX/react-native-shine-button)                                             |
| --------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif" width="600" height="300" /> |

| [react-native-iconic](https://github.com/prscX/react-native-iconic)                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966" width="600" height="300" /> |

| [react-native-download-button](https://github.com/prscX/react-native-download-button)                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif" width="600" height="600" /> |

| [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)                       |
| --------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif" width="600" height="300" /> |

| [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)                                         |
| ------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png" width="600" height="300" /> |

| [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)                                |
| -------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png" width="600" height="300" /> |

| [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)                            |
| ---------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/prscX/react-native-about-libraries/raw/master/hero.png" width="600" height="600" /> |

| [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)                                               |
| ------------------------------------------------------------------------------------------------------------------- |
| <img src="https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg" width="600" height="300" /> |

| [prettier-pack](https://github.com/prscX/prettier-pack)                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png" width="600" height="300" /> |
