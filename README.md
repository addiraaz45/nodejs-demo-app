
# Node.js Demo App with CI/CD

## 📦 Project Overview
This is a simple Node.js app deployed via GitHub Actions using DockerHub. The CI/CD pipeline runs on push to `main` and automates the following:
- Install dependencies
- Run tests
- Build Docker image
- Push image to DockerHub

## 🧪 Test
```bash
npm install
npm test
```

## 🚀 Deployment
Docker image gets deployed to DockerHub automatically after every push to `main`.
