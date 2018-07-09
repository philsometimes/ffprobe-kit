const cp = require('child_process');

var pathToVideo = //fill in your path here

var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
