const fs = require('fs');

var dirPath = process.argv[2]; //directory must contain only one file -- your video
var files = fs.readdirSync(dirPath)
var pathToVideo = dirPath + '/' + files[0];

var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
