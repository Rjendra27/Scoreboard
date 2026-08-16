# 🏀 Basketball Scoreboard Tracker

A simple, sporty scoreboard web app for tracking points between two teams — HOME vs GUEST. Built with vanilla HTML, CSS, and JavaScript.

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)

## 🚀 Demo

🔗 **Live site:** [game-scoreboard-tracker.netlify.app](https://game-scoreboard-tracker.netlify.app/)

Or open `index.html` in any modern browser to try it locally.

## ✨ Features

- Track scores for two teams: **HOME** and **GUEST**
- Quick-add buttons for +1, +2, and +3 points per team (great for basketball scoring: free throw, field goal, three-pointer)
- Clean scoreboard-style display with bold arcade fonts (Orbitron & Archivo Black)
- Basketball-themed background
- No dependencies, no build tools — just open and play

## 📂 Project Structure

```
.
├── index.html   # Markup and structure
├── index.css    # Styling (scoreboard look, fonts, layout)
├── index.js     # Score tracking logic
└── bg.jpg       # Background image
```

## 🛠️ Getting Started

### Prerequisites

Just a web browser — no installation required.

### Run locally

1. Clone the repository
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```
2. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```

## ⚙️ How It Works

Each team has its own score variable (`num1` for HOME, `num2` for GUEST) stored in JavaScript. Clicking a `+1`, `+2`, or `+3` button increments that team's score and updates the display instantly:

```js
function add1() {
    num1 += 1
    document.getElementById("num1-el").textContent = num1   
}
```

The same pattern is mirrored for the GUEST team with `guestAdd1()`, `guestAdd2()`, and `guestAdd3()`.

## 🎨 Customization

- **Fonts** — swap the Google Fonts imports (`Orbitron`, `Archivo Black`) in `index.html`
- **Colors** — adjust the score box and label colors in `index.css`
- **Background** — replace `bg.jpg` with your own image
- **Scoring increments** — edit the `add1/add2/add3` and `guestAdd1/guestAdd2/guestAdd3` functions in `index.js` to change point values

## 🗺️ Roadmap / Ideas

- [ ] Add a "Reset Scores" button
- [ ] Add a game/shot clock timer
- [ ] Add team name editing
- [ ] Persist scores with `localStorage` so a refresh doesn't reset the game
- [ ] Add subtract buttons for correcting mistakes

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
