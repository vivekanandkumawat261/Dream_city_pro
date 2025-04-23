import express from 'express';
// const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          "cityId": "74010",
          "name": "Annecy",
          "region": "Auvergne-Rhône-Alpes",
          "population": {
            "total": 128000,
            "growthRate": 1.5
          },
          "housing": {
            "averageRent": 720,
            "ownershipRate": 54,
            "newConstruction": 1500
          },
          "employment": {
            "unemploymentRate": 6.2,
            "averageIncome": 24500,
            "topSectors": ["Tourism", "Tech", "Retail"]
          },
          "health": {
            "hospitals": 4,
            "doctorsPer1000": 3.2,
            "lifeExpectancy": 82.1
          },
          "geo": {
            "latitude": 45.8992,
            "longitude": 6.1294
          },
          "themeData": {
            "housing": [
              {
                "title": "Home Ownership Rate",
                "value": 54,
                "unit": "%",
                "year": 2023,
                "forecast": false
              },
              {
                "title": "New Constructions",
                "value": 1500,
                "unit": "units",
                "year": 2023,
                "forecast": true
              }
            ],
            "employment": [
              {
                "title": "Unemployment Rate",
                "value": 6.2,
                "unit": "%",
                "year": 2023
              },
              {
                "title": "Average Annual Income",
                "value": 24500,
                "unit": "€",
                "year": 2023
              }
            ]
          }
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});