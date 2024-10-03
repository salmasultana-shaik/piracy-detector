# piracy-detector

Piracy Detector Web Application

Overview

Piracy Detector is a simple web application designed to help detect potential unauthorized distribution of media content. Users can input a URL and a keyword (such as a movie or show name) to check if the keyword appears in the specified content. If found, the system flags the content, indicating that potential piracy may be present.

Features

Keyword Search:Users can enter a keyword and content to search for potential piracy.

Flagging System:If the keyword is found in the content, the system flags the entry as potentially pirated.

Real-Time Interaction: The web page updates dynamically, providing immediate feedback without the need for a page reload.

Responsive Design: Optimized for both desktop and mobile views using CSS.

Scalability: A clean and modular backend using Node.js and Express, which can be extended with additional features (e.g., database storage, user authentication).
Technologies Used

HTML: Used for the basic structure and layout of the web page.

CSS: Used for styling and making the web page visually appealing with a clean, modern design.

JavaScript: Provides interactivity and dynamic updates without reloading the page. Utilizes the Fetch API for handling form submissions asynchronously.

Node.js: Handles the server-side logic, processes incoming requests, and serves the results.

Express: A lightweight framework for Node.js, managing routes and server-side functionality.

Git and GitHub: Version control and cloud-based repository for code management.

How It Works

The user enters a block of text (or content) and a keyword (e.g., the name of a movie or show).

Upon submission, JavaScript captures the data and sends it to the backend server using a POST request.

The Node.js/Express server processes the request by checking if the keyword appears in the provided content.

If the keyword is found, a message indicating potential piracy is returned and displayed on the webpage.

If the keyword is not found, the system reports that no piracy is detected.
