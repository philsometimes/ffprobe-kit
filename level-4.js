//Skip to 4-b if you want to move more quickly


//level 4-a (for loop)
const fs = require('fs');

var dirPath = process.argv[2]; //directory contains your video plus some docs, etc.
var files = fs.readdirSync(dirPath)

files.forEach(
  console.log();
)
for (var i = 0; i < files.length; i++) {
  console.log('file ' + i ' is: ' + files[i]);
}





//level 4-b (if statement)
const fs = require('fs');

var dirPath = process.argv[2]; //directory must contain only one video but also some other stuff
var files = fs.readdirSync(dirPath)
console.log(files);

for (var i = 0; i < files.length; i++) {

  if (files[i] == 'name of your video here'){

      var pathToVideo = dirPath + '/' + files[0];

      var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
      var output = JSON.parse(ffprobe.stdout);

}

  console.log(JSON.stringify(output, null, 4));
}
