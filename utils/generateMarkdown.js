// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        if (license === 'Apache') {
                return "![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
        } else if (license === 'Boost') {
                return "![license](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
        } else if (license === 'BSD') {
                return "![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
        } else {
                return "";
        }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        if (license === 'Apache') {
                return "[  Apache](https://opensource.org/licenses/Apache-2.0)";
        } else if (license === 'Boost') {
                return "[  Boost](https://www.boost.org/LICENSE_1_0.txt)";
        } else if (license === 'BSD') {
                return "[  BSD](https://opensource.org/licenses/BSD-3-Clause)";
        } else {
                return "";
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        if (license) {
                return "<h2> License </h2>\n" + renderLicenseBadge(license) + renderLicenseLink(license);
        } else {
                return "";
        }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

        return "##  <h1>" + data.title + "</h1>" +

                renderLicenseSection(data.license) +

                "<h2> Table of Contents </h2> \n" +
                "- [License](#license) " + "\n" +
                "- [Description](#description) " + "\n" +
                "- [Installation](#installation) " + "\n" +
                "- [Usage](#usage) " + "\n" +
                "- [Contributors](#contributors) " + "\n" +
                "- [Testing](#testing) " + "\n" +
                "- [Github](#github) " + "\n" +
                "- [Email](#email) " + "\n" +

                "<h2>Description</h2> " +
                "<p>" + data.description + "</p>" +

                "<h2>Installation</h2> " +
                "<p>" + data.installation + "</p>" +

                "<h2>Usage</h2> " +
                "<p>" + data.usage + "</p>" +
                "[![Demo Image](https://github.com/Zaphod1977/Professional-README-Generator/blob/main/utils/readme_gen.gif?raw=true)]" + "\n" +
                "[Demo Video: ](https://youtu.be/JfBLfqhFG7Q)" + "\n" +

                "<h2>Contributors</h2> " +
                "<p>" + data.contributing + "</p>" +

                "<h2>Testing</h2> " +
                "<p>" + data.tests + "</p>" +

                "<h2>Github Link</h2> " +
                "<p>" + data.github + "</p>" +

                "<h2>Email Address</h2>" +
                "<p>" + data.email + "</p>";
}

export default generateMarkdown;
