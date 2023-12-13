# Hedgehog Lab User Management

## Development

Run `npx @hedgehoglab/frontend-tech-test-server@latest` to run the API.

Then in the project directory, you can run `npm run dev`, which will run the app in development mode.

Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

<!-- ## Testing

Run `npm test` to launch the test runner in interactive watch mode. -->

## Deployment

Pushing to the Git repository will automatically deploy the app to Netlify. The deploy script runs `npm run build` and `npx @hedgehoglab/frontend-tech-test-server@latest` concurrently
