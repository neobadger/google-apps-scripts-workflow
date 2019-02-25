# Google Apps Script - Development Template
Intended to make developing Google Apps Script (including Google Ads Script) a more joyful experience. Currently, Google Apps Script does not currently support ES6 syntax (at the time of commit). As such, to bring Google Apps Script into 2019, this development template will allow you write modular, ES6 code which is concatenated and transpiled, ready for you to upload to a Google Ads/Google Apps environment. 


## Installation 
Install the core modules associated with this project. If you don't have Grunt CLI, you will need to install it by running `npm install -g grunt-cli` and you will be good to go! 

```
npm install
```



## File Structure
The directory structure is functionally similar to the `src` and `dist` architecture in that all `.js` files in the `src` directory will be concatenated and dropped into the `/script/script.js` file where it gets transpiled. 

```
├───app
│   ├───core
│   └───helper
└───script
```
The `/app/core` directory is meant to contain Google Aps Script (GAS) syntax specific to the GAS runtime; Keeping this separate will allow you to keep your code modular and reusable. Similarly, the `/app/helper` directory can house any polyfills that you don't want to handle though Babel; Alternatively, you might choose to keep any functions which often get repeated, or contain generic boilerplate here so you don't pollute your primary logic body. 

Speaking of 'primary logic', the `/app/app.js` file will contain the `main()` function which is the main entry point for the Google Ads Script runtime. This can be removed if you are creating Google Apps Script, though it may still be useful to keep as this the first in the concatenation queue and might be suitable for centralizing the core logic of your application. 

## Usage
When you are ready to take your development files to production, you can use the `grunt` CLI command to run the default task which will concatenate and transpile your files. If you want to move this iff the default task you can edit the `Gruntfile.js` file.

## Contributing
Pull requests are welcome (especially as this project is more a sketch than a fully-fledged application workflow). For major changes, please open an issue first to discuss what you would like to change. 


## Licence
See [licence here](LICENSE.TXT). More info can be found at [neobadger.com](https://neobadger.com).