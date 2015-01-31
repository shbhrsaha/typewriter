# typewriter

Typewriter is a Meteor app that brings distraction-free writing to the Kindle. It also periodically saves drafts into a backup folder. Read more at: [http://www.shubhro.com/2015/01/30/writing-amazon-kindle/](http://www.shubhro.com/2015/01/30/writing-amazon-kindle/)

- Install [Node](http://nodejs.org/) and [Meteor](https://www.meteor.com/)
- `cd meteor-app && meteor`
- (Separate shell) `cd backup && npm install && node backup.js`
- Open `localhost:3000/?editor` in your computer's web browser
- Open `[your computer's IP address]:3000` in your Kindle's browser

Click on the computer web app's top left corner to start typing. What you type there will now instantly appear on the Kindle. Backups are saved every 15 seconds to the `backup/backups` folder. For the best experience, dim your computer monitor and type on an external keyboard.
