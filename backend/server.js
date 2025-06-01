import express from 'express'; 



const app = express();


app.get('/', (req, res) => {
    res.send('server is ready');
})


app.get('/name', (req, res) => {
    const name = [
        { name: 'Nobo', age: 30 },
        { name: 'Prashant', age: 25 },
        { name: 'X', age: 28 }
    ];
    res.json(name);
});  


const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

