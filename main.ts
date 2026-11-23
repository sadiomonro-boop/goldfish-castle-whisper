import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can talk to animals \u2014 but only goldfish, and all they ever want to discuss is the little plastic castle.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
