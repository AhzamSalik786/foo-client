const express = require('express');
const router = express.Router();

//Item Model
const Items = require('../../model/item');

//@route Get Api/items
//@desc Get All Items
//@acess Pblic
router.get('/', (req, res) => {
    Items.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

//@route Post Api/items
//@desc create A post
//@acess Pblic
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//@route Delet Api/items/Id:
//@desc Delet A post
//@acess Pblic
router.delete('/:id', (req, res) => {
    Items.findById(req.params.id)
    .then(item => item.remove().then(()=>res.json({sucess : true})))
    .catch(err => err.status(404).json({sucess: false}));
});

module.exports = router;