# 🎵 ReChord – Social Music Discovery & Review Platform

**ReChord** is a collaborative music-sharing platform where users can rate songs, albums, and artists, explore trending news, and connect through their taste in music. Whether you're reviewing your favorite album or discovering a friend's top tracks, ReChord brings community and creativity into your listening experience.

---

### 🚀 Features

- 📝 **Rate & Review Music**  
  Add detailed ratings for songs, albums, and artists. See average scores and explore what others are listening to.

- 📰 **Music News Page**  
  Stay updated with the latest headlines, album drops, and artist stories via integrated news APIs.

- 👥 **Social Profiles & Following**  
  Browse profiles, see user ratings and favorites, and follow users to stay connected through shared music tastes.

- 📁 **Favorites Lists**  
  Bookmark your favorite tracks and albums in one place.

- 🌐 **API Integrations**  
  ReChord uses Spotify, Last.fm, and News APIs to fetch music metadata and news in real-time.

---

### 🧰 Tech Stack

#### Frontend
- **React** (with Hooks)
- **React Router DOM**
- **Tailwind CSS**
- **Axios** for API interaction

#### Backend
- **Node.js** with **Express**
- **RESTful API**
- **Dotenv** for environment config
- **Third-party APIs:** Spotify, Last.fm, News API

---

### 📁 Project Structure

```
ReChord/
├── frontend/            # React frontend (views, components, routes)
│   ├── src/
│   └── public/
├── backend/             # Express backend (routes, services, API integrations)
│   ├── routes/
│   ├── controllers/
│   ├── index.js
│   └── .env             # API keys
├── README.md
└── .gitignore
```

---

### 🧑‍💻 How to Set Up the Project

#### 1. Clone the Repository

```bash
git clone https://github.com/staceytoh/ReChord.git
cd ReChord
```

---

#### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

> App will launch at: [http://127.0.0.1:8080](http://127.0.0.1:8080)

---

#### 3. Backend Setup

```bash
cd ../backend
npm install
```

Create a `.env` file in the backend directory with the following contents:

```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
LASTFM_API_KEY=your_lastfm_api_key
NEWS_API_KEY=your_news_api_key
```

Then start the backend server:

```bash
node index.js
```

Verify at: [http://localhost:5000](http://localhost:5000)  
You should see: `ReChord Backend Running`

---

### 💡 Troubleshooting

- **Missing Dependencies**  
  Run `npm install` in both `/frontend` and `/backend`

- **Port Conflicts**  
  Change the `PORT` in `.env` if needed

- **Environment Variables Not Loading**  
  Ensure `.env` file exists and is correctly formatted in the `backend` folder

- **Tailwind Not Working**  
  Ensure your `src/index.css` contains:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- **Node Version Issues**  
  Recommended: Node.js v14+

---

### 🌱 Future Enhancements

- 🧠 AI-driven music recommendations  
- 🎚 Playlist creation & sharing  
- 💬 Comment and like system on reviews  
- 🔒 User authentication and sessions  
- 📱 Mobile-first responsive redesign

---

### 👩‍💻 Developed By
 
- **Gregory Adiprawira**
- **Stacey Toh** 

---

### 📜 License

MIT License — open to explore, remix, and contribute.

---

🎶 Love music? Love clean UIs?  
**ReChord** connects you to people through what they listen to.
