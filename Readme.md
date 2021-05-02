# A simple CLI Tool for quick use of tailwind full features

This tool will help you to quickly purge your HTML, jsx and other template files without having to install and set up tailwind yourself.

Tailwindfy is pretty straight forward to set up and use.
First, you install using:

```javascript
npm install tailwindfy

or 

yarn add tailwindfy
```

## USAGE

Since tailwindfy is a command line npm package, you simply need to use the node's npx command to get it up and running.

Tailwindfy offers the core tailwind functionalities in two broad ways:

## 1. Create Developemnt CSS

Tailwindfy offers the large development CSS that comes with several configurations and variants, carefully put together by [Kitwinds's](https://kitwind.io/) Kometa UI.
To get this CSS (~8MB), you run the follwing command in the shell

```shell
 npx tailwindfy large
```

This will output the CSS file ```tailwinddevcss.css``` inside a styles/output folder in your working directory. Which can then be linked with the desired ```javascript HTML``` or imported into ```javascript .jsx```.
The development CSS is quite large and rightly so because of the several breakpoints and colors multiplied to offer smooth developement experience. However, you would obviously not want to ship that large CSS for production and tailwindfy offers just that.

## 2. PURGE/SHED UNUSED CSS

After tweaking the project to taste, you will likely want to ship the project into production. It is quite unacceptable to send ~8MB of CSS to the user over the bandwidth. Therefore to reduce the CSS file size to exactly the ones utilized, you simply use the ```javascript npx``` command to purge unused CSS. On the Shell or command line, run:

```shell
npx tailwindfy small [name of file]

for example:
npx tailwindfy small index.html
```

Some couple of things to note:
    1. The file should be in the root of the project directory. But if not, then the file relative url from the root directory should be used, for example, this will work quite well

```shell
    npx tailwindfy small src/index.html
```

for a file in the src folder, with the src folder located in the root folder.

This command will output a purged CSS file into the styles/output folder in the root directory. The filename will be  ```javascript tailwindminicss.css``` .(bear with us on that naming).
Tailwindfy is meant for developers who just want to spin up a project quickly without having to worry about setting up tailwind config and still want to use the full tailwind capacity, because let's face it, the CDN version is rarely enough for your use case and comes with a lot of unnneccesary css. You will need all the optimization your webpage can get.
That is pretty much all there is about as far as tailwindfy is concerned, you can report all bugs [here](https://github.com/obafemiolorungbon/tailwindfy/issues). Contributions are highly encouraged. Thanks for taking your time to use my first contribution to open source and [I](https://github.com/obafemiolorungbon) am looking to connect. Thank you!.
