# Readme_Generator

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Contributors](https://img.shields.io/badge/Contributors-1-brightgreen.svg)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Node.js%2C%20Express%2C%20MongoDB%2C%20GenAI-blueviolet.svg)

---

## Table of Contents

*   [Introduction](#introduction)
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Installation](#installation)
    *   [Prerequisites](#prerequisites)
    *   [Environment Variables](#environment-variables)
    *   [Running the Application](#running-the-application)
*   [Usage](#usage)
*   [API Endpoints](#api-endpoints)
*   [Contributing](#contributing)
*   [License](#license)
*   [Contact](#contact)

---

## Introduction

The `Readme_Generator` is an innovative web application designed to simplify and automate the creation of professional, well-structured, and comprehensive GitHub README files. Leveraging the power of generative AI, this tool takes project details as input and crafts a high-quality README, saving developers valuable time and ensuring consistency across their repositories. It features secure user authentication, persistence of generated READMEs, and a robust API for seamless integration.

---

## Features

*   **AI-Powered Generation:** Utilizes `@google/genai` to intelligently generate detailed and tailored README content.  
*   **User Authentication:** Secure user registration, login, and session management using `jsonwebtoken` and `bcrypt`.  
*   **Database Persistence:** Stores user data and generated READMEs in a MongoDB database via `mongoose`.  
*   **Intuitive Web Interface:** Provides an easy-to-use interface for inputting project details and viewing generated READMEs.  
*   **Customization Options:** Allows users to input specific project details and preferences.  
*   **RESTful API:** Exposes endpoints for programmatic access to README generation and management functionalities.  

---

## Technologies Used

*   **Backend Framework:** Express.js  
*   **AI Integration:** @google/genai  
*   **Database:** MongoDB (via mongoose)  
*   **Authentication:**
    *   jsonwebtoken  
    *   bcrypt  
    *   cookie-parser  
*   **HTTP Client:** axios  
*   **Environment Management:** dotenv  
*   **Runtime:** Node.js  

---

## Installation

### Prerequisites

*   Node.js  
*   npm  
*   MongoDB  

---

### Environment Variables and setup

1. Clone the repository:

```bash
git clone https://github.com/Prat-codes3/Readme_Generator.git
cd Readme_Generator
```
2.Install dependencies:
```bash
npm install
```

3.create .env:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_very_secret_key
GEMINI_API_KEY=your_api_key
GITHUB_TOKEN=your_github_token

4.run the application:

  ```bash
     npm run dev
  ```

## send requests using  using postman

POST /api/v1/analyser

Body:
```json
{
  "repoUrl": "https://github.com/account-name/repo-name"
}
make sure u send requests in this format only 
