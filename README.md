# 🌆 Distant Neighbors – City Similarity Recommendation App

This React-based web application allows users in Turkey to find other cities that are most similar to their current city based on a combination of socioeconomic, demographic, political, and environmental indicators.

Users can explore two types of similarity:

- Equal Similarity: All features are treated equally.

- Weighted Similarity: Users can prioritize specific groups like climate, healthcare, or safety.

## 🚀 Live Demo

🔗 [View Live Website](https://nidakayaduman.github.io/distant-neighbors)

---

## ✨ Features

-🔍 City Similarity Detection using precomputed cosine similarity metrics
-🎛️ Weighted Similarity with sliders (0–5 scale) for personal prioritization
-📈 Equal Similarity option with no need for manual weighting
-📊 Bar chart visualization of the Top 5 most similar cities
-🔁 Real-time validation to prevent calculation if the weights sum to 0
-📘 Interactive Info Box that explains how similarity is calculated (step-by-step)
-🧩 Built with Material UI and Recharts
-📱 Fully responsive design for desktop and mobile
-🌐 Deployed on GitHub Pages

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

---

## 📁 Project Structure
```
distant-neighbors/
├── public/
│   ├── cosine_similarity_matrix_new.json       # Equal similarity data
│   └── city_features_by_city.json              # Feature data grouped by city
├── src/
│   ├── App.js                                   # Main app logic and UI
│   ├── App.css                                  # Custom styles
│   └── index.js                                 # React entry point
├── package.json
└── README.md

```

## 👩‍💻 Developed by
**Nida Kayaduman** – Computer Science & Engineering, Sabancı University


