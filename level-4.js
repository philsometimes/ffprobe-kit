//Next, we'll start to add some logical operators to sort our files, allowing us to find the video we want from among the files in the directory.

//Step 4a introduces just the idea of a loop, in this case looping through files. 4b combines the loop with a conditional, or if, statement to find the file we want. Skip to 4-b if you're ready to move through this quickly.


//level 4-a (loop)
const cp = require('child_process');
const fs = require('fs');

var dirPath = process.argv[2]; //this time make sure your directory contains your video and some other files
var files = fs.readdirSync(dirPath)

//TODO: Insert a for or forEach loop here that loops through the files arrary and logs the following each time through the loop:
  console.log(`file ${i} is: ${files[i]}`);






//level 4-b (loop + conditional statement)
const cp = require('child_process');
const fs = require('fs');

var dirPath = process.argv[2]; //again make sure you're using a directory that contains your video along with some other files
var files = fs.readdirSync(dirPath)
console.log(files);

for (var i = 0; i < files.length; i++) {

  if (files[i] == 'name of your video here'){

      var pathToVideo = `${dirPath}/${files[i]}`;

      var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
      var output = JSON.parse(ffprobe.stdout);

}

  console.log(JSON.stringify(output, null, 4));
}
