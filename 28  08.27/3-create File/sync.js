const fs = require('fs');
////////////////////sync//////////////////////////
fs.open('newFile.txt', 'w', function (err, file) {
    if (err)
        console.log(err);
    else {
        console.log('Done');
        fs.access('newFile.txt', fs.F_OK, (err) => {
            if (err)
                console.error('file does not exists');
            else
                console.log('file exists');
        });
    }
});
