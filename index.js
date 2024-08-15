const fs = require('node:fs');
const args = process.argv.slice(2);

const isValidFileAndPath = (path) => {
    return path.endsWith('.txt');
};

const flags = {
    '-l': 'countLines',
    '-w': 'countWords',
    '-m': 'countChars',
    '-c': 'countBytes',
};

const performAction = (action) => {
    const path = action === 'default-action' ? args[0] : args[1];
    console.log({ path });
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        switch (action) {
            case 'countLines':
                console.log(data.toString().split('\n').length + ' lines');
                break;
            case 'countWords':
                console.log(data.toString().match(/\w+/g).length + ' words');
                break;
            case 'countChars':
                console.log(data.toString().match(/\S/g).length + ' character');
                break;
            case 'countBytes':
                console.log(fs.statSync(path).size + ' bytes');
                break;
            default:
                console.log(fs.statSync(path).size + ' bytes');
                console.log(data.toString().split('\n').length + ' lines');
                console.log(data.toString().match(/\S/g).length + ' character');
        }
    });
};

if (!args.length) {
    console.log('Error: No argument detected. Expecting two args [flag][file]');
} else if (args.length > 2) {
    console.log('Error: Expectin two args MAXIMUM [flag][.txt file]');
} else if (args.length === 1) {
    if (isValidFileAndPath(args[0])) {
        performAction('default-action');
    } else {
        if (flags[args[0]]) {
            console.log(
                `Error: Expecting a .txt file argument with ${args[0]} flag`
            );
        } else {
            console.log(`Error: ${args[0]} argument not recognized`);
        }
    }
} else {
    if (!flags[args[0]]) {
        console.log(`Error: ${args[0]} argument not recognized`);
    } else if (flags[args[0]] && isValidFileAndPath(args[1])) {
        performAction(flags[args[0]]);
    }
}
