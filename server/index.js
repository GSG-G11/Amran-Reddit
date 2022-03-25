const app = require('./app');

app.listen(app.get('PORT'), ()=>{
    console.log(`The server is runnig in http://localhost/${app.get('PORT')}`);
})