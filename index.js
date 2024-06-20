import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourfull wellcome message
console.log(chalk.bold.bgCyanBright("\n \t\t Code With Mehdya Word-Counter"));
console.log("=".repeat(60));
//prompt user to enter a sentence
let answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }]);
//trimming the sentence  and spliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
