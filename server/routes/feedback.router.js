const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body)
    let feeling = req.body.feeling;
    let understanding = req.body.understanding;
    let support = req.body.support;
    let comments = req.body.comments;
    const qryTxt = `
    INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `
    pool.query(qryTxt, [feeling, understanding, support, comments])
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    const qryTxt = `SELECT * FROM "feedback" WHERE "flagged" = false;`
    pool.query(qryTxt)
    .then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500);
    })
})

router.get('/flagged', (req, res) => {
    const qryTxt = `SELECT * FROM "feedback" WHERE "flagged" = true;`
    pool.query(qryTxt)
    .then(result => {
        res.send(result.rows);
    }).catch(err => {
        res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const qryTxt = `DELETE FROM "feedback" WHERE "id" = $1;`
    pool.query(qryTxt, [id])
    .then(result => {
        res.sendStatus(200);
    }).catch(err => {
        res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    let flagged = !req.body.flagged
    console.log(flagged);
    const qryTxt = `UPDATE "feedback" SET "flagged"= $1 WHERE "id" = $2`
    pool.query(qryTxt, [flagged, id])
    .then(result => {
        res.sendStatus(201)
    }).catch(err => {
        res.sendStatus(500);
    })
})

module.exports = router;