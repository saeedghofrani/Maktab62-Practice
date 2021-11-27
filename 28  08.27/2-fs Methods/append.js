const fs = require('fs');

///////////////////////////////async///////////////////////////////
try {
    let pluralText = "";
    fs.readFile('./Text/from.txt', { encoding: 'utf8' }, (err, data) => {
        if (err) throw ('readfile form.txt ' + err);
        pluralText += `${data}`;
        fs.readFile('./Text/append.txt', { encoding: 'utf8' }, (err, data) => {
            if (err) throw ('readfile append.txt ' + err);
            pluralText += ` and ${data}`;
            fs.writeFile('./Text/to.txt', String(pluralText), 'utf8', (err) => {
                if (err) throw ('writfile ' + err);
            });
        });
    });
} catch {
}

//////////////////////////////////async append////////////////////////////////
try {
    fs.readFile('./text/from.txt', { encoding: 'utf8' }, (err, data) => {
        if (err) throw 'readfile append.txt ' + err;
        fs.appendFile('./Text/to.txt', String(data), { encoding: 'utf8' }, function (err) {
            if (err) throw 'append to to.txt ' + err;
        });
        fs.readFile('./text/append.txt', { encoding: 'utf8' }, (err, data) => {
            if (err) throw 'readfile append.txt ' + err;
            fs.appendFile('./Text/to.txt', String(data), function (err) {
                if (err) throw 'append to to.txt 2 ' + err;
            });
        });
    });
} catch {
}

////////////////////////////////sync////////////////////////////////
try {
    let dataForm = fs.readFileSync('./Text/from.txt', { encoding: 'utf8' });
    let dataappend = fs.readFileSync('./Text/append.txt', { encoding: 'utf8' });
    fs.appendFileSync('./Text/to.txt', `${dataForm} ${dataappend}`, 'utf8');
} catch (error) {
    console.log("" + error);
}

