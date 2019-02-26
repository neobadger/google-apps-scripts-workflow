# Google Apps Script - Development Template
This project was created to make the development of [Google Apps Script](https://developers.google.com/apps-script/) (including [Google Ads Script](https://developers.google.com/google-ads/scripts/)) a more joyful experience. Currently, Google Apps Script does not currently support ES6 syntax (at the time of commit), making the developer experience more painful than watching Brittney Spears make life decisions in 2007.

As such, to bring Google Apps Script into 2019, this development workflow template will allow you write modular, ES6 code which is concatenated and transpiled, ready for you to upload to a Google Ads/Google Apps environment. 


## Installation 
Note that you will need to have [NodeJS](https://nodejs.org/) installed to use this project This project depends on  [Grunt CLI](https://github.com/gruntjs/grunt-cli) to initiate the execution of tasks. 

```
npm install && npm install -g grunt-cli
```


## File Structure
The directory structure is functionally similar to the `src` and `dist` architecture in that all `.js` files in the `src` directory will be concatenated and dropped into the `/script/script.js` file where it gets transpiled. 

```
├───app
│   ├───core
│   └───helper
└───script
```
The `/app/core` directory is meant to contain Google Aps Script syntax specific to the Apps Script runtime; Keeping this separate will allow you to keep your code modular and reusable. Similarly, the `/app/helper` directory can house any polyfills that you don't want to handle though Babel; Alternatively, you might choose to keep any functions which often get repeated, or contain generic boilerplate here so you don't pollute your primary logic body. 

Speaking of 'primary logic', the `/app/app.js` file will contain the `main()` function which is the main entry point for the Google Ads Script runtime. This can be removed if you are creating Google Apps Script, though it may still be useful to keep as this the first in the concatenation queue and might be suitable for centralizing the core logic of your application. 

## Usage
When you are ready to take your development files to production, you can use the `grunt` CLI command to run the default task which will concatenate and transpile your files. If you want to move this iff the default task you can edit the `Gruntfile.js` file.

## Contributing
Pull requests are welcome (especially as this project is more a sketch than a fully-fledged application workflow). For major changes, please open an issue first to discuss what you would like to change. 


## Licence
See [licence here](LICENSE.TXT). More info can be found at [neobadger.com](https://neobadger.com).