# Kenabecha

Welcome to Kenabecha, your go-to platform for buying and selling second-hand items! Whether you're looking to declutter your home or find great deals on used products, Kenabecha is here to help.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

Kenabecha is a marketplace designed for individuals to buy and sell used items easily and securely. Our goal is to provide a seamless and efficient platform where users can find great deals and give their old items a new life.

## Features

- **User Registration and Login**: Secure authentication and profile management.
- **Listings**: Users can create, edit, and delete their item listings.
- **Search and Filters**: Advanced search and filtering options to find exactly what you need.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MySQL

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/OmarHaroon01/kenabecha.git
    ```

2. Navigate to the project directory:

    ```bash
    cd kenabecha
    ```

3. Install dependencies for both frontend and backend:

    ```bash
    # For backend
    cd kenabecha-backend
    npm install

    # For frontend
    cd ../kenabecha-frontend
    npm install
    ```

4. Set up your environment variables. Create a `.env` file in the `kenabecha-backend` directory and add EMAIL and PASSWORD for sending email for email verification:

    ```env
    EMAIL=your_email
    PASSWORD=your_app_password
    ```

5. Run the development server:

    ```bash
    # For backend
    cd kenabecha-backend
    npm run dev

    # For frontend
    cd ../kenabecha-frontend
    npm start
    ```

6. Open your browser and go to `http://localhost:3000`.

## Usage

- **Register/Login**: Create an account or log in to your existing account.
- **Create a Listing**: Post your item for sale with detailed information and images.
- **Search and Filter**: Use the search bar and filters to find items you are interested in.
- **Contact Seller/Buyer**: Use the messaging system to communicate with other users.
- **Complete a Transaction**: Arrange payment and delivery details through the platform.
