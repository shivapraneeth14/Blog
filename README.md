Personal Blog Platform (MERN Stack)
This is a simple Personal Blog Platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js)

. The platform allows users to view a list of blog 
posts, create new posts, and view individual blog post details. 

The backend is implemented using Node.js with Express, while the frontend is built using React.js. 

The application is deployed to Azure using Azure App Service and Azure SQL Database for data storage.

Table of Contents

Project Title

Project Description

Installation Instructions

Environment Configuration

Running the Application Locally

Deployment Instructions

Architecture Overview

API Endpoints

Testing

License

Project Title

Personal Blog Platform (MERN Stack)

Project Description

This Personal Blog Platform is a full-stack web application that enables users to:

View a list of blog posts.

Create new blog posts.

View individual blog post details.

The backend of the application is built using Node.js and Express.js to expose a set of RESTful API endpoints for managing blog posts. 

The frontend is developed using React.js to create a dynamic user interface that allows users to interact with the blog posts. 

The data is stored in MongoDB, and authentication is managed using JWT (JSON Web Tokens).


The platform is deployed on Azure App Service for both the frontend and backend, and it utilizes Azure SQL Database for storing data in a cloud-based environment.

Installation Instructions
1. Clone the Repository

Clone this repository to your local machine:


git clone https://github.com/your-username/personal-blog-platform.git

cd personal-blog-platform

2. Install Frontend Dependencies
Navigate to the frontend directory and install the necessary dependencies:

cd frontend

npm install

3. Install Backend Dependencies

Navigate to the backend directory and install the necessary dependencies:

cd ../backend

npm install

4. Configure Environment Variables
Create a .env file in both the frontend and backend directories to configure necessary environment variables.


Frontend (.env):

REACT_APP_API_URL=http://localhost:5000/api

Backend (.env):


PORT=5000

DB_URL=your-database-url-here

JWT_SECRET=your-secret-key

5. Running the Application Locally
After setting up the environment variables and installing dependencies, run the application:

For the frontend:


cd frontend

npm run dev

For the backend:

cd backend

npm run dev
Open your browser 
and visit http://localhost:3000 to see the application in action.

Environment Configuration

Ensure you have the following environment variables set up for both frontend and backend:

Frontend:
REACT_APP_API_URL: 

The API URL (e.g., http://localhost:5000/api).

Backend:


PORT: Port number for the backend (e.g., 5000).


DB_URL: The connection string for your database (e.g., Azure SQL Database).



JWT_SECRET: Secret key for JWT authentication.
Deployment Instructions


1. Deploy the Application to Azure
Follow these steps to deploy the application to Azure App Service:

Create an Azure App Service for both frontend and backend.

Configure the Azure SQL Database for storing data.
Set up environment variables in Azure to match the .env configuration.

Deploy both frontend and backend using Git or Azure DevOps.

2. Monitor the Application
Azure provides tools for monitoring the performance and errors of your application. Set up basic monitoring to track the health and performance of your deployed application.

Architecture Overview

Frontend: React.js application running on Azure App Service.
Backend: Node.js and Express.js REST API, deployed on Azure App Service.
Database: Azure SQL Database for storing blog posts.
Authentication: JWT-based authentication for secure 

API access.
API Endpoints
1. GET /api/posts
Description
 Get a list of all blog posts.
Response: 
List of blog posts.
2. POST /api/posts
Description: Create a new blog post.
Request: Blog post data (title, content).
Response: Confirmation message.
3. GET /api/posts/{id}
Description: Get a single blog post by ID.
Response: Blog post details.


Testing

To test the application locally, ensure both frontend and backend are running. Use tools like Postman to test the API endpoints and verify the functionality of each route.
