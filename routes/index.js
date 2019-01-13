const express = require('express');

const data = require('../data/projectsData.json')

const.router = express.Router();

router.get('/about',(req, res) =>{
  res.render('about');
});

router.get('/index',(req, res) =>{
  res.render('index');
  res.app.locals = data.projects;
});

router.get('/project/:id', (req, res) => {
  const {projects} = data;
  const { id } = req.params;
  res.render('project', {projects, id})
});

module.exports = router;
