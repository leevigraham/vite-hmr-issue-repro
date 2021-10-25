# vite-hmr-issue-repro

Clone the repo and run `npm install`.

Start the vite server:

```sh
$ npm run vite:dev
```

Start the node `http-server` server

```sh
$ http-server
```

Vist: `http://127.0.0.1:8080`

## This works:

* Task: Update the tailwind body class in `public/index.php`
* Expected: Browser updates and background changes
* Actual: Browser updates and background changes

## This doesn't:

1. First stop the vite server.
2. Then uncomment `origin: 'http://localhost:3000/'` in the vite config. 
3. Start the vite server
4. Visit `http://localhost:8080`

Then

* Task: Update the tailwind body class in `templates/index.twig`
* Expected: Browser updates and background changes
* Actual: Browser doesn't reload. Reloading the browser doesn't show updated styles either