//You nailed level 1 - yay! But it's kind of a pain to have to update your script anytime you want to run ffprobe on a new file. So, the next logical step is to get the video as an input to our script from the command line, so we can give our script new inputs without changing the script itself.

const cp = require('child_process');

var pathToVideo = //TODO: set the value of this variable to an argument from the command line -- Hint: try googling getting args from the command line in node. Also, not just any argument will do; make sure this variable is getting the path, which will likely be the last CL input, as its value

var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
