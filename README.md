# Take Notes

This is a simple app to take notes. It uses Local Storage API for the purpose of storing the notes data.

## How to start

`yarn add` for installing all the modules
`yarn start` will start the development server at localhost:3000.

## Project Structure

All the code for the site content is in the `src` folder.

The `components` folder contains files for the components used across the site.
The `pages` folder contains files that use the components from above to prepare the final page.
Routing and pages are defined in the `App.js` file in the `src` folder.

## Building the app

`yarn build` to build and output the static files.
All static files are generated in `./build` folder.

## Problems to note

I tried to deploy the site to Github Pages. But the react js failed to render the single page app. It just gives a blank display with colored background.
Hence, I have deployed to Netlify. I used Netlify deploy for the same. Documentation for that is available [here](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/).
