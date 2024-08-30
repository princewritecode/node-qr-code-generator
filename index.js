/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';
const questions = [
    {
        name: 'url',
        message: 'Enter the URL you want to generate a QR code for:',
    }
];
inquirer.prompt(questions).then((answer) =>
{
    const url = answer.url;
    var qr_svg = qr.image(url,);
    qr_svg.pipe(require('fs').createWriteStream('qr-img.png'));

}).catch((error) =>
{
    if (error.isTtyError)
    {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
    }
    else { }
});



