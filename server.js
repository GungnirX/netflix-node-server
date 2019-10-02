const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  console.log('requst url = ' + req.url);
  next();
});

app.get('/api/data', (req, res) => {
  const data = {
    mylist: [
      {
        title: 'Futurama',
        id: 1,
        img: 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
      },
      {
        title: 'The Interview',
        id: 2,
        img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
      },
      {
        title: 'Gilmore Girls',
        id: 3,
        img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
      }
    ],
    recommendations: [
      {
        title: 'Family Guy',
        id: 4,
        img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
      },
      {
        title: 'The Croods',
        id: 5,
        img: 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
      },
      {
        title: 'Friends',
        id: 6,
        img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
      }
    ]
  };
  res.status(200).json({ data: data });
});

app.listen(port, () => {
  console.log('Express App started, listening on port 8000.');
});
