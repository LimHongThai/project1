//import server
const e1 = require('express');

//create a new instance of express that you can assign 
const app = e1();

//default api
app.get('/', (req, res) => {
    res.send('<html><body>Inside get method</body></html>')
});

//reg api
app.post('/reg', (req, res) => {
    res.send('<html><body>registered</body></html>')
});

//log api
app.post('/log', (req, res) => {
    res.send('<html><body>logged in</body></html>')
});

//search api
app.get('/search', (req, res) => {
    res.send('<html><body>result</body></html>')
});

//update api
app.put('/update', (req, res) => {
    res.send('<html><body>updated</body></html>')
});

//delete api
app.delete('/delete', (req, res) => {
    res.send('<html><body>deleted</body></html>')
});

//start the server, 5000 is the port number
app.listen(6000, () => console.log('Express server started at port no: 6000'));