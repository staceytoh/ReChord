# ReChord 🎵

ReChord is a collaborative music-sharing platform where users can rate songs, albums, and artists. It also features music news and social connectivity, including profiles and favorite lists.

---

## 🚀 Features

- **Reviews Page**: Add ratings for songs, albums, and artists with detailed descriptions and average ratings.
- **News Page**: Stay updated with the latest music news and album releases.
- **Social Page**: View your profile, favorite songs, and albums. Follow other users and check their ratings and favorites.

---

## 🧑‍💻 How to Set Up the Project

1. Clone the Repository
```bash
git clone https://github.com/gregadi/ReChord.git
cd ReChord
```

2. Frontend Setup
Navigate to the Frontend directory:
```bash
cd Frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```
The frontend will open automatically in your browser. If not, visit http://127.0.0.1:8080.

5. Backend Setup
Navigate to the Backend directory:
```bash
cd Backend
```

6. Install dependencies:
```bash
npm install
```

7. Create a .env file in the Backend directory. Add the following:
```bash
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
LASTFM_API_KEY=your_lastfm_api_key
NEWS_API_KEY=your_news_api_key
```

8. Start the backend server:
```bash
node index.js
```

9. Verify the backend is running:
Visit http://localhost:5000 in your browser.
You should see: ReChord Backend Running.

## 💡 Troubleshooting

Missing Dependencies:
Run 
```bash
npm install
```
in both the Frontend and Backend directories.

Port Conflicts:
Update the PORT value in the .env file in Backend.

Environment Variables Missing:
Ensure the .env file is correctly created in the Backend directory.

Tailwind CSS Not Applied:
Ensure Tailwind directives are included in src/index.css:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Node.js Version:
Ensure Node.js version is >=14.x.
