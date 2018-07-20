//level 5-b (the final script)
var cp = require('child_process');
var fs = require('fs');

var dirPath = process.argv[2]; //this time use a directory that contains more than one video
var files = fs.readdirSync(dirPath)

var re = undefined // TODO 1: if you didn't already in 5-a, insert a regular expression here for the file extension of your videos (.mov, .mp4, etc.) that isn't case sensitive

for (var i = 0; i < files.length; i++) {

  if (true) { // TODO 2: replace the true in these parentheses with a method that tests whether the file has the extension you defined in your re variable. See 5-a for more details.
    console.log(`${files[i]} is a video
        here is its ffprobe data:
        `);

    // TODO 3: By now you've got this ffprobe call down -- Insert the necessary code here to run the probe anytime your if statement finds a video -- Hint: you can find these lines in your code from prior levels if you get stuck.
  }

}
