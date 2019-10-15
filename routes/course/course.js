var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const coursemodel = require('./course-model');

router.get('/', function (req, res, next) {
    coursemodel.find((err, data) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })

});
router.post('/', function (req, res, next) {
    let obj = req.body;
    obj.createdBy = 'Admin';
    obj.updatedBy = 'Admin';
    // return;
    const cm = new coursemodel(req.body);
    cm.save((err) => {
        if (err) {
            return res.json('there is a error');
        }
        res.json('Data saved')
    })
});
router.patch('/:id', function (req, res, next) {
    let obj = req.body;
    obj.updatedDate = new Date();

    coursemodel.updateOne({
        _id: mongoose.Types.ObjectId(req.params.id)
    }, obj, function (err, data) {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })
});
// router.delete('/:id', function (req, res, next) {
//     coursemodel.updateOne({
//         _id: mongoose.Types.ObjectId(req.params.id)
//     }, {
//         isAcitve: false
//     }, function (err, data) {
//         if (err) {
//             return res.status(500).json('There is an problem saving the data!');
//         }
//         console.log(data);
//         res.send(data);
//     })
// });

module.exports = router;