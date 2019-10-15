var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('./student.model');

/* GET student listing. */
router.get('/or', function (req, res, next) {
    studentModel.find({
        $or: [{
            gender: "male"
        }, {
            gender: "female"
        }]
    }, (err, data) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })
});
router.get('/cursor', function (req, res, next) {
    studentModel.
    aggregate([{
        $group: {
            _id: '$courseId'
        }
    }]).
    exec((err, data) => {
      res.send(data);
    });
});

router.get('/and', function (req, res, next) {
    studentModel.find({
        $and: [{
            gender: "male"
        }, {
            firstname: "John"
        }]
    }, (err, data) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })
});
router.get('/toupper', function (req, res, next) {
    studentModel.find({
        $toUpper: {
            firstname: "John"
        }
    }, (err, data) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })
});
router.get('/gt', function (req, res, next) {
    studentModel.find({
        age: {
            $gt: 34
        }
    }, (err, data) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })
});
router.get('/nin', function (req, res, next) {
    studentModel.find({
        courseId: {
            $nin: ["5d9ec50ca661470b4cb91296", "5d9ec501a661470b4cb91295"]
        }
    }, (err, data) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);
    })
});
router.get('/course/:courseId', function (req, res, next) {
    studentModel.find({
        courseId: req.params.courseId
    }, function (err, data) {
        console.log(err);
        console.log(data);
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }
        res.send(data);

    })
})

router.patch('/:id', function (req, res, next) {
    console.log(req.params);
    console.log(req.body);

    // const sm=new studentModel(req.body);
    studentModel.findOneAndUpdate({
        _id: mongoose.Types.ObjectId(req.params.id)
    }, req.body, function (err, data) {
        res.send(data);
    });
});
router.delete('/:id', function (req, res, next) {
    studentModel.deleteOne({
        _id: mongoose.Types.ObjectId(req.params.id)
    }, function (err, data) {
        res.send(data);
    });

    // const sm=new studentModel(req.body);
});


/* Insert student data. */
router.post('/', function (req, res, next) {
    const sm = new studentModel(req.body);
    sm.save((err) => {
        if (err) {
            return res.status(500).json('There is an problem saving the data!');
        }

        res.json('Data saved successfully');
    })
});

module.exports = router;