﻿const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1> Bem Vindos! N3 DevOps :D, Aline, Diego, Maria JUlia, Leonardo e Magnólia </h1>');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'operational', version: '1.0.0' });
});

module.exports = app;
