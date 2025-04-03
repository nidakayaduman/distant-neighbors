# 🌆 Distant Neighbors – City Similarity Recommendation App

This React-based application helps users discover cities in Turkey that are socioeconomically and demographically similar to their current city. By selecting personal preferences and distributing importance across various criteria, users receive a recommendation based on a cosine similarity matrix.

## 🚀 Live Demo

🔗 [View Live Website](https://nidakayaduman.github.io/distant-neighbors)

---

## ✨ Features

- 🔍 **City Similarity Detection** using a pre-calculated cosine similarity matrix
- 🎚️ **Weight Input** for prioritizing criteria
- 🔒 **Total Score Validation** – Enforces 100-point total requirement
- 🧩 **Material UI Components** for clean and responsive design
- 📱 **Responsive Layout** – Optimized for desktop and mobile
- 🌐 **Hosted via GitHub Pages**

---

## 📦 Installation Guide (Run Locally)

### 1. Clone the Repository
```bash
git clone https://github.com/nidakayaduman/distant-neighbors.git
cd distant-neighbors
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Material UI
Material UI (MUI) and emotion styling are required:
```bash
npm install @mui/material @emotion/react @emotion/styled recharts


```

### 4. Start the Development Server
```bash
npm start
```
The app will run locally at: `http://localhost:3000`

---

## 🧠 How It Works

- The cosine similarity matrix is stored in `/public/cosine_similarity_matrix.json`
- Users input a city name and assign weights (0–100) to various quality-of-life indicators.
- When submitted, the app:
  - Validates that total weight equals 100
  - Finds the most similar city using the cosine similarity data
  - Displays the closest match with a similarity percentage

---

## ⚙️ Deployment (GitHub Pages)
To build and deploy the app:

### Add the following to `package.json`:
```json
"homepage": "https://nidakayaduman.github.io/distant-neighbors",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```
This will publish your app to GitHub Pages automatically.

---

## 📁 Project Structure
```
distant-neighbors/
├── public/
│   └── cosine_similarity_matrix.json
├── src/
│   ├── App.js           # Main application UI and logic
│   ├── App.css          # Custom styles
│   └── index.js         # React entry point
├── package.json
└── README.md
```

---

## 👩‍💻 Developed by
**Nida Kayaduman** – Computer Engineering 

