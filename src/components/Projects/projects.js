import React from "react";

import LandingVibixScheduler from "resources/landing-vibix-scheduler.png";
import LandingVibixConsignment from "resources/landing-vibix-consignment.png";
import LandingVibixWeb from "resources/landing-vibix-web.png";
import LandingIfunny from "resources/landing_ifunny.png";
import LandingQuiltback from "resources/landing-quiltback.png";
import LandingDeliwin from "resources/landing-deliwin.png";
import GameOfLife from "resources/game-of-life.png";
import HALanding from "resources/ha-landing.png";

const projects = [
  {
    name: 'Hispanic Alliance of GA',
    description: <p>Helped a non-profit redo/update their wordpress website. Added spanish translations, storyboards, and refactored old components.</p>,
    image: HALanding,
  },
  {
    name: 'Vibix Scheduler',
    description: <p>Shopify app built to help store owners create, apply, and manage discounts for thousands of products.</p>,
    image: LandingVibixScheduler,
  },
  {
    name: 'Vibix Consignment',
    description: <p>Shopify app built to allow store owners to create consignors. Owners can track historical consignor balances, sales, deductions and inventory’s age.</p>,
    image: LandingVibixConsignment,
  },
  {
    name: 'Vibix Web',
    description: <p>Website built in order to ramp-up the digital presence of Vibix Automation.</p>,
    image: LandingVibixWeb,
  },
  {
    name: 'iFunny',
    Description:
      <p> Cloned and customized
      <a className="projects_link" target="_blank" rel="noopener noreferrer" href="https://ifunny.co">ifunny.co</a>,
      a website meant for posting funny pictures & GIFs which are viewed by tens of thousands people a day.</p>
    ,
    image: LandingIfunny,
  },
  {
    name: 'Quiltback',
    description: <p>Website built for a Utah based 501(c) to allow users its users to communicate by creating blogs, and host events to raise money through auctioning quilts.</p>,
    image: LandingQuiltback,
  },
  {
    name: 'Deliwin Cafe',
    description: <p>Designed, and created a cafe restaurant's website that sells hispanic and vietnamese food. (Not a real business.)</p>,
    image: LandingDeliwin,
  },
  {
    name: 'Game of Life',
    description: <p>A clone of <a className="projects_link" href="https://bitstorm.org/gameoflife/" target="_blank" rel="noopener noreferrer">John Conway's Game of Life</a> with my own design.</p>,
    image: GameOfLife,
    href: "https://game-of-life-fd.firebaseapp.com",
  },
];

export default projects;