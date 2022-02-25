const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let feeling = req.body.feeling;
    let understanding = req.body.understanding;
    let support = req.body.support;
    let comments = req.body.comments;
    const qryTxt = `
    INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
    `
    pool.query(qryTxt, [feeling, understanding, support, comments])
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        res.sendStatus(500);
    })
})