import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {franc} from "franc";
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und') {
    console.log("Sorry! Couldn't figure it out try more sample text.".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green);
}


