const Comment = require('../models/comment');
const Pharmacy = require('../models/pharmacy');

/**
 * @route POST api/comment/:id
 * @desc Add a comment
 * @access Public
 * @method POST
 */
const addComment = async (req, res, next) => {
  try {
    const { comment } = req.body;
    const pharmacy = req.params.id;

    if (!comment) {
      const error = new Error('Comment is required');
      error.status = 400;
      throw error;
    }

    const exist = await Pharmacy.findById(pharmacy);
    if (!exist) {
      error = new Error('Pharmacy not found');
      error.status = 404;
      throw error;
    }

    const newComment = new Comment({
      comment,
      pharmacy,
    });

    const commentAdded = await newComment.save();

    res.status(201).json({
      success: true,
      data: commentAdded,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addComment,
};
