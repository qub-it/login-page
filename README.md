# login-page


## Installation ##

The first and only thing you will need to do, to build your custom login page, is to have `node` and `npm` intalled on your computer.  
Luckily, if you haven't, you can sort that out in a breeze by just following this quick guide: [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/).

After that, clone this repo and on its root dir just type

```
  npm install
```

This will tell npm to install all the needed dependencies required to build your custom login page.

When `npm` is done with it, just type

```
  npm run build
```

to start the build process.

At some point you will be prompted to a small CLI that will ask you the settings for your custom login page.  
Defaults will be presented between parenthesis and empty answers will assume the default values.

Once this is done, an `output` folder will be created with your generated artifacts.  
Now you have a custom login page you can setup anywhere! Pretty sweet, hey? :wink:



## Prearranged setup ##

If you already know the settings you have on `conf/login-page-content.json` are the right ones, you can skip the CLI by typing instead

```
  npm run build-nocomposer
```
