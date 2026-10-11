🛍️ NovaCart — Modern E-Commerce Platform

Smart Shopping. Seamless Experience.

NovaCart is a full-stack e-commerce application designed to provide a modern online shopping experience while demonstrating core software engineering concepts, including Object-Oriented Programming, Java, JDBC, MySQL, and Web Technologies.

The project combines a responsive storefront with database-driven order management, creating a foundation for a scalable online shopping platform.

---

✨ Key Features

- 🛒 Product Catalog — Browse products across multiple categories.
- 🔍 Smart Search — Find products using keywords and category filters.
- 👤 User Authentication — Login and registration functionality.
- 🧺 Shopping Cart — Add products, manage quantities, and review items.
- 💳 Checkout Workflow — Create orders and calculate purchase totals.
- 📦 Order Management — Place, view, search, update, and cancel orders.
- 🗄️ Database Integration — Persist order information using Java JDBC and MySQL.
- 🎨 Responsive UI — A clean storefront designed for desktop and mobile screens.
- 🧊 3D Product Preview — Interactive product visualization planned as part of the enhanced storefront.

«Project status: Under active development. Features may be implemented progressively.»

---

🧰 Technology Stack

Layer| Technologies
Frontend| HTML5, CSS3, JavaScript
Backend| Java
Database Connectivity| JDBC
Database| MySQL
Data Structure| Java LinkedList
Development Environment| Eclipse IDE
Version Control| Git and GitHub

---

🏗️ System Architecture

                 CUSTOMER
                    |
                    v
          HTML / CSS / JavaScript
                    |
                    v
              Java Web Server
                    |
                    v
               JDBC Layer
                    |
                    v
               MySQL Database
                    |
                    v
        Products, Users and Orders

The browser communicates with the Java backend, which processes requests and interacts with MySQL through JDBC. The database stores persistent application data.

---

🗂️ Project Structure

NovaCart-ECommerce/
│
├── src/
│   ├── DBConnection.java
│   ├── Main.java
│   ├── Order.java
│   ├── OrderManager.java
│   └── WebServer.java
│
├── web/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md

The structure may evolve as additional modules are introduced.

---

🗄️ Database

NovaCart uses MySQL to persist order information.

The current order-management table includes:

Column| Description
"order_id"| Unique order identifier
"customer_name"| Customer name
"product_name"| Ordered product
"quantity"| Number of items
"price"| Product price
"status"| Current order status

The database can be extended with product inventory, user accounts, payments, and order-item tables as the application develops.

---

⚙️ Getting Started

Prerequisites

Install the following:

- Java Development Kit (JDK)
- MySQL Server
- Eclipse IDE or another Java IDE
- MySQL Connector/J
- Git

1. Clone the repository

git clone https://github.com/sharisaran-07/NovaCart-ECommerce.git

2. Create the database

Open MySQL Workbench and execute:

CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) DEFAULT 'Placed'
);

If the table already exists, do not create it again.

3. Configure database connectivity

Add MySQL Connector/J to the Java project's build path.

Configure the database connection using environment variables rather than committing database credentials to GitHub.

Example environment variable:

DB_PASSWORD=your_local_mysql_password

Set this variable on your own machine using your operating system's environment-variable settings.

4. Import and run

1. Import the project into Eclipse.
2. Verify the JDBC driver and database configuration.
3. Start MySQL Server.
4. Run "DBConnection.java" to verify connectivity.
5. Run "Main.java" to access the console-based order-management features.
6. Run "WebServer.java" once its web-server configuration is ready.

The browser storefront requires the Java server to be implemented and configured to serve the frontend and API endpoints.

---

🔐 Security Considerations

- Never commit database passwords, API keys, or GitHub tokens.
- Use "PreparedStatement" for database queries.
- Store passwords using a secure password-hashing algorithm.
- Validate user input on the backend.
- Keep database credentials in environment variables.
- Use HTTPS and secure session handling when deploying the application.

---

🚀 Roadmap

- [x] Java-based order-management foundation
- [x] JDBC and MySQL connectivity
- [x] Console-based order operations
- [x] Initial web storefront structure
- [ ] Complete browser-to-Java API integration
- [ ] Product catalog backed by the database
- [ ] User registration and login
- [ ] Persistent shopping cart and checkout
- [ ] Order history and status tracking in the web UI
- [ ] Real product photography and interactive 3D previews
- [ ] Deployment and production-readiness improvements

---

🎯 Learning Outcomes

This project demonstrates practical application of:

- Object-Oriented Programming in Java
- LinkedList and data handling
- JDBC and relational database operations
- SQL queries and database design
- Frontend development with HTML, CSS, and JavaScript
- Git-based version control
- Client-server architecture

---

👨‍💻 Author

Hari Saran S

B.Tech — Artificial Intelligence and Data Science
National Engineering College, Kovilpatti

GitHub: "@sharisaran-07" (https://github.com/sharisaran-07)

---

📄 License

This project is intended for educational and learning purposes. A formal open-source license can be added when the project’s distribution terms are decided.

---

⭐ If you find this project interesting, consider starring the repository!

NovaCart — Bringing smarter shopping experiences to life.
