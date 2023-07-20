const fs = require('fs')

fs.open('testFile.txt', 'w', (err) =>{
    console.log('File created');
})

fs.writeFile('testFile.txt', "I'm the replacement you've been looking for.", (err) => {
    console.log('Data has been replaced!');
});

fs.readFile('./testFile.txt', 'utf8', (error, data) => {

    fs.mkdirSync('./files', () => {})

    fs.writeFileSync('./files/newTestFile.txt', `${data} This is new File`, () =>{})

    fs.rename('testFile.txt', 'TestFile.txt', (err) => {
        console.log('File renamed successfully!');
    });
})

setTimeout(() => {
    fs.unlink('./files/newTestFile.txt', (err) =>{
        console.log('textFile deleted successfully!');
    })
}, 10000)

setTimeout(() => {
    fs.rmdir('./files', (err) =>{
        if(err) throw err;
        console.log('File deleted successfully!');
    })
}, 15000)