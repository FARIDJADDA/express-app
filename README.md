---

This app show you how Node.js work.
In this application, we will show different packages like Express as well as libraries like Mongoose, a database like MongoDB and many other things like sockets.
At the end I will make a copy of Twitter.

---

# EXPRESS

FIRST Install Node:
https://nodejs.org/en/download/

For dependencies put on your console (bash or zsh is better) : 

---
For change your default console
Open Visual Studio Code.
Press CTRL + SHIFT + P to open the Command Palette.
Search for “Terminal: Select Default Shell”
Select your preferred shell on Bash

---

### Initialize npm

```console
npm init
```

### Initialize Express package

```console
npm i express
```

### Initialize ex Jade now Pug

```console
npm i pug
```

# NODEMON

```console
npm i nodemon
```

Or global

```console
npm i -g nodemon
```

### Add script to package.json

```json
"scripts": {
    "start": "nodemon app.js"
  },
```

and run server with nodemon

```console
npm start
```
