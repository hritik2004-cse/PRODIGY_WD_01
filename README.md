# My JavaScript Project

## Overview

This project contains a simple HTML, CSS, and JavaScript setup for a basic interactive webpage. The JavaScript functions provided handle sidebar visibility, form validation, and a placeholder for a purchase feature.

## File Structure

**index.html:**  The main HTML file that contains the structure of the webpage.

**style.css:**  The CSS file that styles the webpage.

**script.js:** The JavaScript file that contains the interactive functionalities.

### HTML (index.html)
The HTML file includes a form for user input, a sidebar for additional content, and buttons to trigger the JavaScript functions. Here's a brief overview of the main elements:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>My JavaScript Project</title>
</head>
<body>
    <div class="side-bar-div">Sidebar content here</div>
    <button onclick="showsidebar()">Show Sidebar</button>
    <button onclick="hidesidebar()">Hide Sidebar</button>
    <form>
        <input type="text" id="name" placeholder="Your Name">
        <button type="button" onclick="greet()">Submit</button>
    </form>
    <button onclick="buy()">Buy</button>
    <script src="script.js"></script>
</body>
</html>
```
### CSS (style.css)
The CSS file styles the sidebar and other elements on the page. Here's a snippet of what it might look like:

```
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.side-bar-div {
    display: none;
    width: 200px;
    height: 100vh;
    background-color: #f4f4f4;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    padding: 20px;
}
```
### JavaScript (script.js)
The JavaScript file includes functions to show and hide the sidebar, validate form input, and display an alert for the buy button. Here are the functions:

```
function showsidebar(){
    const sidebar = document.querySelector(".side-bar-div");
    sidebar.style.display = "flex";
}

function hidesidebar(){
    const sidebar = document.querySelector(".side-bar-div");
    sidebar.style.display = "none";
}

function greet(){
    const name = document.querySelector("#name").value;
    if (name === ''){
        alert("Please fill in your name.");
    } else {
        alert(`Thanks for contacting me, ${name}! I will get back to you soon.`);
    }
}

function buy(){
    alert("This feature is not available at this time. Please try again later.");
}
```
### Usage

**Show Sidebar:** Click the "Show Sidebar" button to display the sidebar.

**Hide Sidebar:** Click the "Hide Sidebar" button to hide the sidebar.

**Submit Form:** Enter your name in the input field and click "Submit" to see a greeting message. If the input field is empty, an alert will ask you to fill in your name.

**Buy Button:** Click the "Buy" button to see an alert indicating that the feature is not available.

### Future Improvements

1. Add more interactivity to the sidebar.
2. Implement the "Buy" feature with backend integration.
3. Improve form validation and styling.
