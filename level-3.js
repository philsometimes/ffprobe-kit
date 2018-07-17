//Success! But now it's time to start thinking a bit bigger picture. If we just want to run ffprobe on a single video, we can make that probe call directly from terminal. No coding needed! Ideally, we want to be able to run ffprobe on a whole directory, say a shoot folder, of video and then do some things with the data. We'll start here by searching in a directory to find a single video. To get started put the video file you've used so far into a new empty folder, so the folder contains your video and nothing else.


const cp = require('child_process');
const fs = require('fs');

var dirPath = process.argv[2]; //your new folder is now the input we're getting from the command line
var files = //TODO: call a function that will read a directory and output the files in it here; you can find it by googling "npm fs" -- Hint: when you set the value of a variable to a function, the variable's value is the result of running that function

var pathToVideo = `${dirPath}/${files[0]}`; //ffprobe needs the full path to our video as an input not just the file name; this is a way of constructing that full path


var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
var output = JSON.parse(ffprobe.stdout);

console.log(JSON.stringify(output, null, 4));
