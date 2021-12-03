# vite-hmr-issue-repro

Clone the repo and run `npm install`.

Start the vite server:

```sh
$ npm run vite:dev
```

Visit: `http://http://localhost:3000`

## This works:

* Task: Update the tailwind body class in `src/index.html`
* Expected: Browser updates and background changes
* Actual: Browser updates and background changes

## This doesn't:

1. First stop the vite server.
2. Then uncomment `origin: 'http://localhost:3000/'` in the vite config. 
3. Start the vite server: `npm run vite:dev`
4. Visit `http://localhost:3000`

Then

* Task: Update the tailwind body class in `src/index.html`
* Expected: Browser updates and background changes
* Actual: Browser reloads. Styles not updated

Then

* Task: Restart the vite server
* Expected: Styles updated
* Actual: Styles updated