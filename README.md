                                                       Personal Blog Platform (MERN Stack) 
1. Setup Instructions
               Clone the Repository:

               git clone https://github.com/shivapraneeth14/Blog.git

               cd personal-blog-platform

Install Dependencies:

      Frontend:
          cd frontend
          npm install

      Backend:
          cd ../backend
          npm install


Configure Environment Variables:

      Frontend (.env):

          REACT_APP_API_URL=http://localhost:5000/api

      Backend (.env):

         PORT=5000
         DB_URL=your-database-url-here
         JWT_SECRET=your-secret-key
Run Locally:

       Frontend:
         cd frontend
         npm run dev

      Backend:
        cd backend
        npm run dev

2. Deployment Process
       Deploy to Azure:

        1.Create Azure App Service for both frontend and backend.
        2.Configure Azure SQL Database for data storage.
        3.Set up environment variables in Azure based on the .env configuration.
Monitor Application:

Use Azure monitoring tools to track performance and errors.

3. Architecture Overview

      Frontend: React.js running on Azure App Service.

      Backend: Node.js & Express.js REST API on Azure App Service.
   
      Database: Azure SQL Database for storing blog posts.
   
      Authentication: JWT for secure API access.
