# VueTodo
A todo app built using node, express, mongodb and vuejs

# Setup
Install npm packages 

```
npm install
```

Make sure you have webpack installed
```
npm install webpack -g
```

# Build

Build the scripts
```
webpack --watch
```

The `--watch` will auto build on any changes, remove it for a one time build.

# Run

```
node src/app.js
```
This will do a one time run, but nodemon will refresh the server everytime a change is detected.

Install Nodemon
```
npm install -g nodemon
```
Then run it
```
nodemon
```

or

```
nodemon src/app.js
```
