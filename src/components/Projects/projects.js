import React from "react";

import Caculator from "resources/calculator-logo.jpeg";
import TwichTv from "resources/twitchtv-logo.jpeg";
import SimonGame from "resources/simon-game-logo.jpeg";
import WikiViewer from "resources/wiki-api-logo.jpeg";
import RandomQuote from "resources/random-quote-logo.jpeg";
import WeatherLogo from "resources/weather-app-logo.jpeg";
import GameOfLife from "resources/game-of-life.png";
import TicTacToe from "resources/tic-tac-toe-logo.jpeg";

const projects = [
  {
    name: "Tic Tac Toe",
    description: (
      <p>
        A simple game built with Html5, css3 and JS. The app includes an
        ultimate computer player. It can optimize any given situation on the
        Tic-Tac-Toe board.
      </p>
    ),
    image: TicTacToe
  },
  {
    name: "calculator simulation",
    description: (
      <p>Simulate some basic operation of calculator by visualization.</p>
    ),
    image: Caculator
  },
  {
    name: "Twitch TV",
    description: (
      <p>
        The app help users keep track of currently streaming on Twitch.tv. users
        can click the status output and be sent directly to the target Twitch.tv
        channel.
      </p>
    ),
    image: TwichTv
  },
  {
    name: "Simon Game",
    description: (
      <p>
        Simon Game is a simple game which goal is for user to repeat the pattern
        showed by the program.
      </p>
    ),
    image: SimonGame
  },
  {
    name: "Wiki Viewer",
    description: (
      <p>
        The app help you search Wikipedia entries in a search box and see the
        resulting Wikipedia entries. you can click a button to see a random
        Wikipedia entry.
      </p>
    ),
    image: WikiViewer
  },
  {
    name: "Random Quote",
    description: <p>The app showing the quote in a block.</p>,
    image: RandomQuote
  },
  {
    name: "Local Weather",
    description: (
      <p>
        Users can see their current location, see a different icon or background
        image (e.g. snowy mountain, hot desert) depending on the weather.
      </p>
    ),
    image: WeatherLogo
  },
  {
    name: "Game of Life",
    description: (
      <p>
        A clone of{" "}
        <a
          className="projects_link"
          href="https://bitstorm.org/gameoflife/"
          target="_blank"
          rel="noopener noreferrer"
        >
          John {"Conway's"} Game of Life
        </a>{" "}
        with my own design.
      </p>
    ),
    image: GameOfLife,
    href: "https://game-of-life-fd.firebaseapp.com"
  }
];

export default projects;
