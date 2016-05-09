'use strict';

const express = require('express');
const router = express.Router();

let reports = [
    {
        name: 'Name',
        description: 'description',
        type: 'chart',
        data: {percentage: 80},
    },
    {
        name: 'Name 2',
        description: 'description 2',
        type: 'tabular',
        data: {percentage: 40}
    }
]

router.get('', (req, res) => {
    res.send({reports: reports});
});

module.exports = router;
