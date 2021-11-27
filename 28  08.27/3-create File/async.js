const fs = require('fs');
////////////////////async//////////////////////////
try {
    fs.open('newFile.txt', 'w', function (err) {
        if (err) throw err;
        console.log('Done');
        fs.access('newFile.txt', fs.F_OK, (err) => {
            if (err)
                throw 'file does not exists';
            console.log('file exists');
        });
    });
} catch {

}

