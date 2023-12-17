# Hedgehog Lab User Management

## Development

Run `npx @hedgehoglab/frontend-tech-test-server@latest` to run the API.

Then in the project directory, you can run `npm run dev`, which will run the app in development mode.

Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

<!-- ## Testing

Run `npm test` to launch the test runner in interactive watch mode. -->

## Deployment

Pushing to the Git repository will automatically deploy the app to [Netlify](). The deploy script runs `npm run build` and `npx @hedgehoglab/frontend-tech-test-server@latest` concurrently

## Notes

### TODO

- delete user - show message when delete completes
- testing
- deployment

### Features

- Uses Typescript throughout
- Authentication flow borrows heavily from previous auth flow done as part of a React course
- Users "store" is simply an object stored in memory. If the app grew I would use something like `redux`
- Getting all users currently capped at 1000, pagination done client side. If the user object grew much bigger or the number of users grew to 1000s, would reconsider using server-side pagination
- Responsive design, with breakpoints at 40rem (640px) and 60rem (960px)
- Light and dark mode, depending on user device preference
- Header icon, default user image and favicon created using MidJourney
- Raleway font downloaded from [Google fonts](https://fonts.google.com/specimen/Raleway)
