## Application to convert Celsius to Fahrenheit or vice versa
This application can be accessed at below url.<br/>
https://SohtaInoguchi.github.io/temperature-converter


## How to install onto local computer
- Git clone the repository.<br/>
- `npm install` to install all the dependencies.


## How to build and deploy the application
Execute `npm run deploy`<br/>
This script builds production build and deploy to Github page.


## How light/dark mode is implemented
- Added id to div element that is set at the highest App component, so that it wraps all the child components.
- Passed 'theme' state to the id that can be toggled between 'light' and 'dark' with setTheme() function. The state and function are made available globally with context API in case it needs to be accessed in ancestor components.
- Created two versions of CSS for each class and id that are in child component, one version has #light as parent selector and another has #dark as parent selector so every time the the id is toggled between 'light' and 'dark', the corresponding CSS is applied and changing the color theme.


## Rational behind the UI design and application architecture.
UI design: The button and input is placed top to bottom in the order where user can understand what to do next intuitively - which temperature unit the user would like to convert from => input field => The button to convert => The output.
Application architecture: Top level App component has a state which is used to toggle between light and dark mode theme. The state is applied to div element as an id and the div element has Converter component as a child so that every time the state is changed, respective css styles are applied to componens that are wrapped under the div element. The logic to convert temperature is defined in the Converter component so that the component is reusable if necessary.
React is used for this application because of flexibility of JSX and wide range of packages if it needs to be expanded to larger application.
