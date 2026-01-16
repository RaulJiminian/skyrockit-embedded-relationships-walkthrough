# 📘 Repo Overview

This repo is a full-stack JavaScript application built with **Node.js**, **Express**, and **MongoDB**. It uses environment variables to securely manage configuration values and follows a standard development workflow using **npm**.

The instructions below will help you fork the repository, install dependencies, configure environment variables, and run the project locally.

## Fork & Clone the Repository

1. **Fork the repository**
   - Click the **Fork** button in the top-right corner of this GitHub repository.
   - This creates a copy of the project under your own GitHub account.

2. **Clone your forked repository**
   - Note: Your cloned repo will appear inside of the directory you are currently working in.

   ```bash
   git clone https://github.com/your-username/skyrockit-embedded-relationships-walkthrough.git
   ```

3. **Navigate into the project directory**

   ```bash
   cd skyrockit-embedded-relationships-walkthrough
   ```

## Install Dependencies

This project uses **npm** to manage dependencies.

Run the following command in your terminal:

```bash
npm install
```

This will install all required packages listed in `package.json`.

## Environment Variables Setup

To keep sensitive information secure, this project uses a `.env` file.

1. **Create a `.env` file** in the root of the project:

   ```bash
   touch .env
   ```

2. **Add the following environment variables** to the `.env` file:

   ```env
   MONGODB_URI=mongoConnectionString
   SESSION_SECRET=areallylonggoodkey
   ```

   - `MONGODB_URI` → Your MongoDB connection string
   - `SESSION_SECRET` → A long, random string used to secure sessions

> ⚠️ **Important:** Never commit your `.env` file to GitHub. It should be listed in your `.gitignore`.

## Run the Development Server

To start the application in development mode, run:

```bash
npm run dev
```

Once the server is running, open your browser and navigate to:

```
http://localhost:3000
```

(or the port specified in your project)
