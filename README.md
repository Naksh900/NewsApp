# NewsGrid - Top Headlines News App

NewsGrid is a fully responsive, single-page React application that delivers the latest headlines across various categories using the [GNews API](https://gnews.io/). Built with modern React practices and styled with a clean dark theme, NewsGrid ensures users stay updated with world events, business, technology, health, science, sports, and entertainment, all from one intuitive interface.

---

##  Live Demo

> 🚀 **Live Link**: [https://1dailynewsapp1.netlify.app/](https://1dailynewsapp1.netlify.app/)  
> 

---

##  Screenshot

![](https://github.com/user-attachments/assets/8fc49b56-962e-4b16-a474-1e74cb9f1353)
  


---

##  Tech Stack

| Tech            | Usage                                    |
|-----------------|------------------------------------------|
| React           | Core UI library                          |
| React Router    | For client-side routing                  |
| GNews API       | Fetching real-time news data             |
| CSS             | Custom dark theme styling                |
| Netlify         | Hosting and optional serverless backend  |
| dotenv          | Managing environment variables           |

---

##  Features

- Browse headlines by category (e.g., Business, Entertainment, Sports)
- Displays article title, image, publication time
- Easy-to-navigate user interface
- Category-based routing using React Router
- Dynamic data fetching with real-time updates
- Responsive design for mobile & desktop
- Ready for Netlify deployment

---

##  Project Structure
```
newsgrid/
├── netlify/
│ └── functions/
│ └── news.js
├── public/
│ ├── index.html 
│ ├── favicon.ico 
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── components/
│ │ ├── Navbar.js 
│ │ └── News.js 
│ ├── NewsItem.js
│ ├── App.js 
│ ├── App.css 
│ ├── index.js 
│ └── index.css 
├── .gitignore
├── netlify.toml 
├── package.json
└── README.md
```
## Local Development
### 1. Clone the Repository

```bash
git clone https://github.com/05-Jagritii/NewsApp.git
cd NewsApp
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Get Your NewsAPI Key
Visit https://gnews.io/
<br/>
Sign up and copy your API key
### 4. Create `.env` File
```bash
REACT_APP_NEWS_API=your_api_key_here
```
Make sure `.env` is included in `.gitignore`.
### 5. Start the Dev Server
```bash
npm run start
```
App runs on `http://localhost:3000`

## Author
Jagriti Kanwar
<br>
Mail : [kanwarjagriti21@gmail.com ](mailto:kanwarjagriti21@gmail.com)
<br>
LinkedIn : [Jagriti Kanwar](https://www.linkedin.com/in/jagriti-kanwar)
