## Project structure

This project uses import alias which means every import is relative to the root folder.
E.g. to import main `App` component the code would be `import App from 'components/App';`.
Very useful down the road.

> This boilerplate was set up according to the guidelines in https://github.com/profico/hr-tool-frontend/blob/master/style-guide.md. The structure below extends the base project structure defined in the style guide.

```
src
└── services (place to store services which communicate with the backend)
└── styles (place to store basic styles settings such as variables, mixins etc.)
```

> Some of the listed folders are not created in the repository to keep the repository size smaller and easier to customize.

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
