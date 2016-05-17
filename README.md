# VueTodo
A todo app built using node, express, mongodb and vuejs

# Setup
Install npm packages

```
npm install
```

# Build

Make sure you have gulp installed
```
npm install gulp -g
```

Build the scripts
```
gulp
```

If you are developing run the watch task to check for changes and auto build

```
gulp watch
```

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
