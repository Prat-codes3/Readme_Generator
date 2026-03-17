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
JWT_SECRET=a_very_secret_key (optional)  
GEMINI_API_KEY=your_api_key  
GITHUB_TOKEN=your_github_token  

### running the application:

  ```bash
     npm run dev
  ```

## usage

on browser:
step 1:go to https://localhost:8000(or whatever port number you set in .env)  

step 2: simply paste the link of your github repo 

on postman:
POST /api/v1/analyser

Body:
```json
{
  "repoUrl": "https://github.com/account-name/repo-name"
}
make sure u send requests in this format only 
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
## contact 
pratikwankhede503@gmail.com
