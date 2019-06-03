const sass = require('node-sass')
const fs = require('fs')

sass.render({ 
    file: './app/test.scss',
    outputStyle: 'compressed'
}, (err, result) => {
    if(err){
        console.log(err)
        return false
    }

    fs.writeFile('./app/output/main.css', result.css, err => {
        if(err){
            console.log(err)
            return false
        }
        return true
    })
})