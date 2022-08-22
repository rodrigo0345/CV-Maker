# Usage

Live demo: [Demo](https://rodrigo0345.github.io/CV-Maker/) [not working] 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Basic Explanation of the code and files systems

This project was made with react and as such I will devide the explanation into different components.

## App.jsx
This component is responsible to render the entire page.
Inside of App we have other 2 components, the Header and the Section, where the section is the actual responsible for most of the program.
Note: **In index.css we set some global Css for an ease of use.**

## Section.jsx
Inside section we have a lot of functions and states:
- experience, education, skill and language are there to just act as counters and are later used inside the Form and Preview components ( this could be improved because this values could be just stored inside the "mainObject" state)
- enableCustomize is just toggling the options menu to change the colors of the CV preview. (Again, could be improved in the future)
- settings stores the colors choosen by the user and enables us to save this state into localStorage.
- mainObject stores all the actual "important" information as it enables us to write on the Form, display what we wrote on the Form onto the preview and to store the information into localStorage.

The Section is divided into 2 main components (Form and Preview)

## Form.jsx
Includes the actual inputs and also the options to save, reset and print the Preview component as a pdf.

