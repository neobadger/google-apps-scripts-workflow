# Google Apps Script - Development Template

This project was created to make the development of [Google Apps Script](https://developers.google.com/apps-script/) (including [Google Ads Script](https://developers.google.com/google-ads/scripts/)) a more joyful experience. Currently, Google Apps Script does not currently support ES6 syntax (at the time of commit), making the developer experience more painful than watching Brittney Spears [make life decisions in 2007](https://en.wikipedia.org/wiki/Britney_Spears#2006%E2%80%932007:_Personal_struggles_and_Blackout).

As such, to bring Google Apps Script into 2019, this development workflow template will allow you write modular, ES6 code which gets dynamically imported into a single file, and transpiled ready for you to upload to a Google Ads/Google Apps environment.

## Installation

Note that you will need to have [NodeJS](https://nodejs.org/) installed to use this project. This project depends on [Grunt CLI](https://github.com/gruntjs/grunt-cli) to initiate the execution of tasks.

```
npm i && npm i -g grunt-cli
```

## File Structure

The directory structure is functionally similar to the `src` and `dist` architecture in that all your development files are housed in the `/app` directory and, when ready for deployment, your modules are dynamically imported into your `app.js` and dropped in `script.js` (in the `/script` directory) where it gets transpiled to Apps Script friendly syntax.

```
root
├───app
│   ├───core
│   └───helper
└───script
```

The `/app/core` directory is meant to contain Google Apps Script syntax, specific to the Apps Script runtime; keeping this separate will allow you to keep your code modular and reusable. Similarly, the `/app/helper` directory can house any polyfills that you don't want to handle though Babel. Alternatively, you might choose to keep any logic which often gets repeated or contains boilerplate code here so you don't pollute your primary logic body (#DRY) managed in the `/app/app.js` file.

The `/app/app.js` file is the entry point for the compilation Grunt tasks and, if deployed in Google Ads, the Google Ads Script runtime (via the `main()` function). Your modules can be imported dynamically and inlined into the output file by using the `@import` syntax (provisioned by the [grunt-import](https://www.npmjs.com/package/grunt-import) package).

Optionally, you may choose to add a `modules.js` file into the `/app` directory which will allow you to separates your module imports from the main logic body that's in your `app.js`, keeping your code even clean and opening the door to abstracting the `module.js` file from the Google Apps Script runtime completely (hosting your modules externally, if desired).

## Usage

When you are ready to take your development files to production, you have several build options, all managed through the command line (using Grunt CLI). These can be modified as needed in the `Gruntfile.js` file, however, the 'out of the box options are as follows:

### Default Task

This task will import all modules specified in `/app/app.js` file and transpile to your output file (`/script/script.js`). Use the command below to run this task:

```
grunt
```

### Export Manual Task

If you want to have separate files for your main logic body and your modules, this command is for your (stake knives not included)! In the root of the `/app` directory, create a file called `modules.js`; this is where you can add any module imports your `app.js` file will be dependant on.

Running the following command will:

1. Dynamically import your modules into a file in the `/script` directory called `modules.js`
2. Transpile the contents of `/app/app.js` into `/script/script.js`
3. Transpile the contents of `/script/modules.js` into itself.

```
grunt export_manual
```

### Export Modular Task

If you don't plan to use dynamic imports, this task will allow you concatenate all your modules into a separate `modules.js` file in the `/script` directory, which gets transpiled along with your `/script/script.js` file.

Running the following command will:

1. Concatenate all your modules in the `/app/core` and `/app/helper` directories into a single `modules.js` file in the `/script` directory.
2. Create a `script.js` file in the `/script` directory.
3. Transpile `script.js` and`modules.js` in the `/script` directory, rendering the output to the source file.

**Important Note**

If you have any `@import` statements in any of your files (for whatever horribly obscure edge-case you may be catering to), Babel will throw an error as this is not a valid JavaScript statement. Be sure to remove this before running your command.

```
grunt export_modular
```

### Export All Task

If you don't plan to use dynamic imports and need to bundle all your files into a single file, this task will fulfil all your hopes and dreams (just add water... via the command-line)!

Running the following command will:

1. Concatenate all files in the `/app` directory into a single file in the `/script` directory called `script.js`.
2. Transpile `script.js` in the `/script` directory, rendering the output to the source file.

**Important Note**

If you have any `@import` statements in any of your files (for whatever wickedly wretched edge-case you may be using it for), Babel will throw an error as this is not a valid JavaScript statement. Be sure to remove this before running your command.

```
grunt export_all
```

### Using the Watch Task

This task leverages `grunt-contrib-watch` to allow active task execution when a file has been modifies/saved. The watch task will run the Default Task (above), though this can be changed to suit your development requirements. Be sure to change both the `watch.scripts.files` and the `watch.scripts.tasks` to match the task you need to be run on save.

## VS Code Workspace Hygiene

If you are a VS Code user, you might want to set some workspace in your `.vscode/settings.json` file to prevent annoying syntax/style warnings; the following may be useful to get you started (though a more elegant approach can be applied based oin your workspace preferences):

```
{
  "javascript.validate.enable": false,
  "javascript.implicitProjectConfig.experimentalDecorators": true
}
```

## Contributing

Pull requests are welcome (especially as this project is more a sketch than a fully-fledged application workflow). For major changes, please open an issue first to discuss what you would like to change.

## Licence

See [licence here](LICENSE.TXT). More info can be found at [neobadger.com](https://neobadger.com).
