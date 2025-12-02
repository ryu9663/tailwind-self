import { writeFileSync } from "fs";
import { colors, spacing, fontSize } from "../src/styles/pallete";

let css = "";

for (const [key, value] of Object.entries(spacing)) {
  css += `.m-${key}{margin:${value}}\n`;
  css += `.mt-${key}{margin-top:${value}}\n`;
  css += `.mb-${key}{margin-bottom:${value}}\n`;
  css += `.ml-${key}{margin-left:${value}}\n`;
  css += `.mr-${key}{margin-right:${value}}\n`;

  css += `.p-${key}{padding:${value}}\n`;
  css += `.pt-${key}{padding-top:${value}}\n`;
  css += `.pb-${key}{padding-bottom:${value}}\n`;
  css += `.pl-${key}{padding-left:${value}}\n`;
  css += `.pr-${key}{padding-right:${value}}\n`;
}

for (const [name, value] of Object.entries(colors)) {
  css += `.bg-${name}{background-color:${value}}\n`;
  css += `.text-${name}{color:${value}}\n`;
}

for (const [name, value] of Object.entries(fontSize)) {
  css += `.text-${name}{font-size:${value}}\n`;
}

css += `
.flex{display:flex}
.inline-flex{display:inline-flex}
.flex-row{flex-direction:row}
.flex-col{flex-direction:column}
.items-start{align-items:flex-start}
.items-center{align-items:center}
.items-end{align-items:flex-end}
.justify-start{justify-content:flex-start}
.justify-center{justify-content:center}
.justify-between{justify-content:space-between}
.justify-end{justify-content:flex-end}
`;

writeFileSync("mini-tailwind.css", css);
