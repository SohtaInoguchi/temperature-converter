## Application to convert Celsius to Fahrenheit or vice versa
This application can be accessed at below url.<br/>
https://SohtaInoguchi.github.io/temperature-converter


## How to build and deploy the application
Execute `npm run deploy`<br/>
This script builds production build and deploy to Github page.


## How light/dark mode is implemented
- Added id to div element that is set at the highest App component, so that it wraps all the child components.
- Passed 'theme' state to the id that can be toggled between 'light' and 'dark' with setTheme() function.
- Created two versions of CSS for each class and id that are in child component, one version has #light as parent selector and another has #dark as parent selector so every time the the id is toggled between 'light' and 'dark', the corresponding CSS is applied and changing the color theme.


## Rational behind the UI design and application architecture.
the solution that you used. Make sure to include the description on the rationale behind the UI design and the application architecture. It would also be good to explain how you came to the decision on which tools or framework to use.

The button and input is placed top to bottom in the order where user can understand what to do next intuitively - which temperature unit the user would like to convert from => input field => The button to convert => The output.
React is used for this application because of flexibility of JSX and wide range of packages if it needs to be expanded to larger application.
