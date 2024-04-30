const express  = require('express');
const {
    getAllContents,
    createContent,
    getContentById,
    updateContent,
    deleteContent
} = require('../controllers/contentController');

var router = express.Router();

router.route('/contents').get(getAllContents).post(createContent);
router.route('/contents/:id').get(getContentById).put(updateContent).delete(deleteContent);

module.exports = router;