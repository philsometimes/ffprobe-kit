//Alright, let's finish this! We'll use something called a regular expression to search not just for a file with a particular name but for all video files in a directory. Again, we'll split this logic into two steps; feel free to skip ahead to 5-b if you're ready.


//level 5-a (regex test)
const cp = require('child_process');
const fs = require('fs');

var dirPath = process.argv[2]; //this time use a directory that contains more than one video
var files = fs.readdirSync(dirPath)

var re = // TODO: insert a regular expression here for the file extension of your videos (.mov, .mp4, etc.) that isn't case sensitive -- Hint: look up regular expressions on MDN

for (var i = 0; i < files.length; i++) {

  if (true) { //replace the true in these parentheses with a method that tests whether the file has the extension you defined in your re variable.
    console.log(`${files[i]} is a video`);
  }

}






//level 5-b (the final script)
const cp = require('child_process');
const fs = require('fs');

var dirPath = process.argv[2]; //this time use a directory that contains more than one video
var files = fs.readdirSync(dirPath)

var re = // TODO: if you didn't already in 5-a, insert a regular expression here for the file extension of your videos (.mov, .mp4, etc.) that isn't case sensitive

for (var i = 0; i < files.length; i++) {

  if (true) { //replace the true in these parentheses with a method that tests whether the file has the extension you defined in your re variable.
    console.log(`${files[i]} is a video
      here is its ffprobe data: `);

    // TODO: By now you've got this ffprobe call down -- Insert the necessary code here to run the probe anytime your if statement finds a video -- Hint: you can find these lines in your code from prior levels if you get stuck.
  }

}
