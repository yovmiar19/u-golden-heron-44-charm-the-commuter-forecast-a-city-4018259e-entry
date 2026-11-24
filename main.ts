// Charm the Commuter: Forecast a City That Isn't
// One line of weather for a city that does not exist, written to /output/entry.txt.
// The forecast is assembled from its three parts so each piece stays readable
// on its own: the invented place, the weather, and the commuter's warning.

import { mkdirSync, writeFileSync } from "node:fs";

const parts = {
  city: "St. Jude-in-the-Fens",
  weather: "Heavy fog until dusk",
  warning: "do not touch the glowing green puddles outside the library",
};

const line = `${parts.city}: ${parts.weather}; ${parts.warning}.`;

// Keep the entry inside the 140-character cap the gate enforces.
if (line.length < 1 || line.length > 140) {
  throw new Error(`Forecast must be 1-140 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
