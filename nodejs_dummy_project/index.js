const express = require('express')
const axios = require('axios').default

const app = express()

app.get('/', (req, res) => {
    return axios.get('http://localhost:7070/getdata').then(response => {
        console.log("Received response from the API")
        res.send(response.data)
    }).catch(err => {
        console.log("Error calling the api", err)
    })

})

app.listen(6060, () => {
    console.log('Server started')
})