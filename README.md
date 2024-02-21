# Welcome to Code Challenge App!
This app attempts to be a small version of apps of code challenge like Leetcode or hackerrank.

The app at this moment only supports 1 problem but in the future the idea is to connect with a storage and process multiples files.

The app only supports one endpoint, --POST '/code/runtests'

# Installation
Version of node required:
```bash
➜ node --version
v18.17.1
```

Run the following command in order to install all dependencies

```bash
npm install
```

Create environment file in order to connect with API.
File name: `.env.local`, it must contain the following (change the url of backend if neccesary):
```bash
NEXT_PUBLIC_API_URL='http://localhost:3001'
```
backend file is in the following repository:
https://github.com/fabio4520/code-challenge-api


# Run your application:
Run the app 
```bash
npm run build
npm run start
```

Go to this url: http://localhost:3000

Enjoy the app :D