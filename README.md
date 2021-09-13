# [clerks.and.coffee](http://clerks.and.coffee/)

## Framework Selection
* Having experience with a number of frontend frameworks (professional: [React, Next, Ember], personal: [Angular, Vue]), made it hard for me to decide on one.
* I also saw that you where giving **bonus points** to those that would implement it using Vanilla JS.
* Therefore, I went with Vanilla.

## Project Structure
* The project consists of one index.html file, which contains all the logic.
* Since I went with a vanilla approach, I figured splitting everything into different files and using a bundler (Webpack) to stitch everything together, would be reinventing the wheel.
* The ad-hoc state mgmt system that I wrote, is 100% my own work and I came up with it only for this assignment (super refreshing tbh).
* In terms of lazy-loading, I chose to prefetch the whole thing (10 pages x 3 profiles), since it's not a lot of KiBs. If that wasn't the case, I'd prefetch only adjacent pages and not the whole thing.
* I used flexbox to make the app responsive and mobile first.

## Testing
* For testing, I went with Cypress.
* To run the tests:
  * From the GUI: yarn test
  * From the terminal: yarn test:ci

## Misc
* I also created a project board on GitHub where I created and kept track of tickets to help me work on the whole thing more efficiently and in an atomic way.
* If you want access to the GitHub repo, please provide me with a GitHub account I can use to add you as a colab, since the repo is private.
