# MovieDB - React Movie Database Application

A modern, responsive movie database application built with React that allows users to discover and explore movies using The Movie Database (TMDb) API.

## 🚀 Live Demo

Check out the live demo: [Movie Database](https://movie-database-pi-dun.vercel.app/)

## 🎬 Features

- **Browse Popular Movies**: Discover the most popular movies currently trending
- **Top Rated Movies**: Explore critically acclaimed and highly-rated films
- **Upcoming Releases**: Stay updated with upcoming movie releases
- **Movie Search**: Search for specific movies by title
- **Movie Details**: View detailed information about each movie including ratings and descriptions
- **Responsive Design**: Optimized for desktop and mobile devices
- **Pagination**: Navigate through multiple pages of movie results

## 🛠️ Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 6.22.0** - Client-side routing
- **The Movie Database (TMDb) API** - Movie data source
- **CSS3** - Styling and responsive design
- **React Context API** - State management for search functionality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn package manager

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Movie Database/client"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **API Configuration**
   - The application uses The Movie Database (TMDb) API
   - API key is already configured in the application
   - For production use, consider moving the API key to environment variables

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The application will automatically reload when you make changes

## 📁 Project Structure

```
client/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── MovieCard/
│   │   ├── MovieDetails/
│   │   ├── NavBar/
│   │   ├── Pagination/
│   │   ├── Popular/
│   │   ├── SearchQuery/
│   │   ├── TopRated/
│   │   └── Upcoming/
│   ├── context/
│   │   └── SearchMoviesContext.js
│   ├── hooks/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── vercel.json
```

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder with optimized performance

### `npm run deploy`
Deploys the application to GitHub Pages (requires gh-pages setup)

## 🌐 Deployment

The application is configured for deployment on:

### Vercel
- Configuration file: `vercel.json`
- Automatic deployment on push to main branch

### GitHub Pages
- Use `npm run deploy` command
- Requires `gh-pages` package (already included)

## 🔧 API Integration

The application integrates with The Movie Database (TMDb) API to fetch:
- Popular movies
- Top-rated movies
- Upcoming movies
- Movie search results
- Detailed movie information

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🧑‍💻 Developer

- **Kundena Akhil** - [Portfolio](https://portfolio-nine-flax-29.vercel.app/) - [GitHub](https://github.com/Akhil07-ctrl) - [LinkedIn](https://www.linkedin.com/in/kundena-akhil-4b7073170/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [Create React App](https://github.com/facebook/create-react-app) for the initial project setup
- React community for excellent documentation and resources
