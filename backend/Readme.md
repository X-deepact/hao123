Backend for Hao123 Clone

This repository contains the backend implementation for a demo project inspired by Hao123, a directory and navigation portal. The backend is built to provide a flexible, scalable, and efficient API to support features like managing website links, categories, and user interactions.

Table of Contents

Features
Tech Stack
Installation
Environment Variables
API Endpoints
Database Schema
Contributing

Tech Stack

Programming Language: Go (Golang)
Database: MongoDB
API Framework: Gin
Configuration Management: Viper
Testing: Go testing package
Dependency Management: Go Modules


Installation

Prerequisites
Go 1.20 or higher
MongoDB (v5 or later)
git installed on your system
Steps
Clone the repository:
git clone https://github.com/yourusername/hao123-backend.git
cd hao123-backend

Install dependencies:
go mod tidy

Set up your .env file (see Environment Variables).
Run the application:
go run main.go
Access the API at http://localhost:8080


Environment Variables

Create a .env file in the project root and configure the following:

DATABASE_URL=mongodb://admin:password@127.0.0.1:27017/?authSource=admin
ENVIRONMENT=development
DB_USERNAME=admin
DB_PASSWORD=password
DB_NAME=halo
SOURCE=admin


Contributing

We welcome contributions! Please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix:
git checkout -b feature-name
Commit your changes:
git commit -m "Description of changes"
Push to your branch:
git push origin feature-name
Create a pull request.

