const Disea = require('../models/diseaModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Apifeatures = require('../utils/apifeatures.js');

// create disea --admin
exports.createDisea = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const disea = await Disea.create(req.body);

  res.status(201).json({
    success: true,
    disea,
  });
});

// get all diseas

exports.getAllDiseas = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const diseaCount = await Disea.countDocuments();

  const apiFeature = new Apifeatures(Disea.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const disease = await apiFeature.query;

  res.status(200).json({
    success: true,
    disease,
    diseaCount,
  });
});

// get disea detail
exports.getDiseaDetails = catchAsyncErrors(async (req, res, next) => {
  const disea = await Disea.findById(req.params.id);

  if (!disea) {
    return next(new ErrorHandler('Disea not found', 404));
  }

  res.status(200).json({
    success: true,
    disea,
    diseaCount,
  });
});

// update disea --- admin
exports.updateDisea = catchAsyncErrors(async (req, res, next) => {
  let disea = await Disea.findById(req.params.id);
  if (!disea) {
    return next(new ErrorHandler('Disea not found', 404));
  }

  disea = await Disea.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    disea,
  });
});

// Delte Disea

exports.deleteDisea = catchAsyncErrors(async (req, res, next) => {
  const disea = await Disea.findById(req.params.id);

  if (!disea) {
    return next(new ErrorHandler('Disea not found', 404));
  }

  await disea.remove();

  res.status(200).json({
    success: true,
    message: 'Disea Deleted Successfully',
  });
});

// creatuing reviews fpr disea

exports.createDiseaReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, diseaId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const disea = await Disea.findById(diseaId);

  const isReviewed = disea.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    disea.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    disea.reviews.push(review);
    disea.numOfReviews = disea.reviews.length;
  }

  let avg = 0;

  disea.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  disea.ratings = avg / disea.reviews.length;

  await disea.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

//get all reviews of diseas
exports.getDiseaReviews = catchAsyncErrors(async (req, res, next) => {
  const disea = await Disea.findById(req.query.id);

  if (!disea) {
    return next(new ErrorHandler('diseas not found', 400));
  }

  res.status(200).json({
    success: true,
    reviews: disea.reviews,
  });
});

// delete review

exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const disea = await Disea.findById(req.query.diseaId);

  if (!disea) {
    return next(new ErrorHandler('diseas not found', 404));
  }

  const reviews = disea.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const ratings = avg / reviews.length;

  const numOfReviews = reviews.length;

  await Disea.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
  });
});
