# customer-management
React and Node.js Application with PostgreSQL Database
This application is built using React for the frontend, Node.js for the backend, and PostgreSQL for the database. It provides functionality to manage customer records with the following features:
Database Initialization: Automatically creates 50 dummy records in the PostgreSQL database with the specified column fields: sno, customer_name, age, phone, location, created_at.
Single Page Application (SPA): Displays the customer records in a table format with search and pagination features.
Date and Time Display: The created_at column data is displayed in two separate columns as date and time.
Search Functionality: Allows users to search for customer records by the name or location columns.
Sorting Option: Provides the option to sort the data either by date or by time.
Installation
1.Clone the repository:
git clone <repository_url>
2.Navigate to the project directory:
cd <project_directory>
3.Install dependencies for both frontend and backend:
cd frontend
npm install 
cd ../backend
npm install pg express cors body_parser
Database Setup
1.Make sure PostgreSQL is installed on your system.

2.Create a new PostgreSQL database named customer_db.

3.Update the database connection settings in the backend/db.js file.

4.Run the database migration script to create the customers table and insert dummy data:
npm run migrate
Usage
1.Start the backend server:
 cd backend
  node index.js
2.Start the frontend server:
cd frontend
npm start
3.Access the application in your web browser at http://localhost:3000
