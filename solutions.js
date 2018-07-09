//before you begin... collapse answers you don't want to see...

<level 1>

    const cp = require('child_process');

    var pathToVideo = '/users/desktop/'

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
    var output = JSON.parse(ffprobe.stdout);

    console.log(JSON.stringify(output, null, 4));

</level 1>


<level 2>

    const cp = require('child_process');

    var pathToVideo = process.argv[2];

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
    var output = JSON.parse(ffprobe.stdout);

    console.log(JSON.stringify(output, null, 4));

</level 2>


<level 3>

    const fs = require('fs');
    const cp = require('child_process');

    var dirPath = process.argv[2];
    var files = fs.readdirSync(dirPath)
    var pathToVideo = dirPath + '/' + files[0];

    var ffprobe = cp.spawnSync("ffprobe", ['-v', 'quiet', '-print_format', 'json', '-show_format', '-show_streams', pathToVideo], { encoding : 'utf8' });
    var output = JSON.parse(ffprobe.stdout);

    console.log(JSON.stringify(output, null, 4));

</level 3>


<level 4-a>

    const fs = require('fs');
    const cp = require('child_process');

    var dirPath = process.argv[2]; //directory contains your video plus some docs, etc.
    var files = fs.readdirSync(dirPath)

    files.forEach(
      console.log();
    )
    for (var i = 0; i < files.length; i++) {
      console.log('file ' + i ' is: ' + files[i]);
    }

</level 4-a>

<level 4-b>

    const fs = require('fs');
    const cp = require('child_process');

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

</level 4-b>


<level 5-a>
</level 5-a>

<level 5-b>
</level 5-b>
