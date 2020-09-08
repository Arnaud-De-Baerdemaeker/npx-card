#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const data =
{
	name: chalk.green.bold("           Arnaud DE BAERDEMAEKER"),
	work: chalk.white("Junior Web Developer @ BeCode"),
	npm : chalk.white("https://www.npmjs.com/~ptit-naud"),
	github: chalk.white("https://github.com/Arnaud-De-Baerdemaeker"),
	linkedin : chalk.white("https://www.linkedin.com/in/arnaud-de-baerdemaeker-b342a71a9"),
	npx: chalk.white("arnaud-de-baerdemaeker"),
	labelWork: chalk.green.bold
	(
		"    Work : "
	),
	labelNpm: chalk.green.bold
	(
		"     npm : "
	),
	labelGithub: chalk.green.bold
	(
		"  Github : "
	),
	labelLinkedIn: chalk.green.bold
	(
		"LinkedIn : "
	),
	labelNpx: chalk.green.bold
	(
		"     npx : "
	),
};

const newLine = "\n";

console.log
(
	chalk.green
	(
		boxen
		(
			[
				data.name,
				newLine,
				data.labelWork + data.work,
				data.labelLinkedIn + data.linkedin,
				data.labelGithub + data.github,
				data.labelNpm + data.npm,
				newLine,
				data.labelNpx + data.npx,
			].join("\n"),
			{
				borderStyle: "double",
				borderColor: "green",
				padding: 1,
			},
		),
	),
);