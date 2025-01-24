# COLLABORATIVE_DOCUMENT_EDITOR

**COMPANY** : CODTECH IT SOLUTIONS
**NAME** : DEEPALI SANJAY HIRAVE
**INTERN ID** : CT08HRX
**DOMAIN NAME**: FULL STACK WEB DEVELOPMENT
**BATCH DURATION** : December 30th, 2024 to January 30th, 2025.
**MENTOR NAME:** : Neela Santhosh Kumar
# DESCRIPTION 
**Tools Used**
Code Editor:
VS Code: Used for writing, organizing, and debugging the codebase. The integrated terminal and extensions (e.g., Live Server) enhance productivity during development.

Version control:
GitHub: The project was hosted on a GitHub repository for versioning and collaboration.

Browser Developer Tools:
Chrome DevTools was used to debug, test responsiveness, and optimize API calls.

Testing Tools:
Postman: To test and validate API requests before integrating them into the code.

**Resources Used**
Public APIs:
OpenWeatherMap API: For fetching real-time weather data such as temperature, humidity, and weather conditions. An API key was required for authentication.
NewsAPI: Used to retrieve the latest news headlines and articles, with filtering options like country, category, or keywords.

Documentation and Guides:
Official API documentation to understand endpoints, parameters, and authentication methods.
Tutorials and guides for responsive web design and API integration.

Responsive Design Frameworks:
CSS : Additional responsiveness and layout customizations were achieved using native CSS features.

Hosting Platform:
The webpage was hosted on GitHub Pages for easy deployment and public access.

**Tools and Features Used**
HTML:
The structure includes a text input for the user to enter a city name, a button to fetch the weather, and a section (<div>) to display the weather information.
The id attributes (city and weather-info) allow JavaScript to interact with these elements dynamically.

CSS:
Styling is minimalistic and responsive:
A gradient background to represent the sky.
Rounded borders and a semi-transparent container to enhance the design.
Hover effects on the button for improved interactivity.
The layout is designed using Flexbox to center the content both vertically and horizontally.

JavaScript:
Handles the API call and dynamic content update.
Includes error handling to notify users when no city is entered or when the city is not found.

API:
Uses the OpenWeatherMap API to fetch real-time weather data.
Query parameters include the city name (q), the API key (appid), and metric units (units=metric).

**How the Code Works**
User Input:
The user types a city name in the input box and clicks the "Get Weather" button.

Button Click Action:
The onclick event calls the fetchWeather() JavaScript function.
Fetch Weather Functionality:

Captures the user input from the text box (document.getElementById('city').value).
Validates the input to ensure it’s not empty.
Sends a GET request to the OpenWeatherMap API endpoint with the city name and API key as parameters.
Parses the JSON response from the API to extract weather details (e.g., temperature, description, humidity, wind speed).
Dynamic Content Update:

On a successful API response, the weather details are displayed in the weather-info <div> using innerHTML.
If an error occurs (e.g., city not found), an error message is shown instead.

Styling and Responsiveness:
The layout is responsive and looks consistent on different devices due to the use of percentages (width: 80%) and Flexbox.
Sample Output
Successful Case:
If the user enters "London":

The API returns data about London.

API calls were tested in Postman before integration.
Browser developer tools were used to debug JavaScript errors and optimize performance.
Final Output
The final webpage delivered a seamless user experience:

Weather App:

Users could input a city name to view current weather data (e.g., temperature, humidity, wind speed) with visual icons indicating conditions like sunny, rainy, or cloudy.
 
Responsive Design:

The webpage adapted perfectly to screens of all sizes, ensuring usability across devices.
Overall, the project demonstrated a robust integration of tools, libraries, and resources, resulting in a professional and functional webpage.


#OUTPUT OF TASK
![Image](https://github.com/user-attachments/assets/167fb4a0-7141-4357-b9af-f2912703fd38)
