const express = require('express')
const axios = require('axios').default

const app = express()


app.get('/getdata', (req, res) => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(
        response => {
            console.log("Response is ", response)
            res.send(response.data)
        })
        .catch(err => {
        console.log("There is an error", err)
    })
})

app.listen(7070, () => {
    console.log('Started data api')
})