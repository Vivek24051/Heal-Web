const Apt = require('../models/aptModels');
const Disea = require('../models/diseaModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.newApt = catchAsyncErrors(async (req, res, next) => {
  const {
    appointmentInfo,
    aptDisea,
    paymentInfo,
    DiseaPrice,
    totalPrice,
    taxprice,
  } = req.body;

  const apt = await Apt.create({
    appointmentInfo,
    aptDisea,
    paymentInfo,
    DiseaPrice,
    totalPrice,
    taxprice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    apt,
  });
});

// get single apt
exports.getSingleApt = async (req, res, next) => {
  const apt = await Apt.findById(req.params.id).populate('user', 'name email');

  if (!apt) {
    return next(new ErrorHandler('apt not found with this id', 404));
  }

  res.status(200).json({
    success: true,
    apt,
  });
};

// get loggedin user apt
exports.myApts = catchAsyncErrors(async (req, res, next) => {
  const apts = await Apt.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    apts,
  });
});

// get all  apt
exports.getAllApts = catchAsyncErrors(async (req, res, next) => {
  const apts = await Apt.find();

  let totalAmount = 0;

  apts.forEach((apt) => {
    totalAmount += apt.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    apts,
  });
});

// delete apt --admin
exports.deleteApt = catchAsyncErrors(async (req, res, next) => {
  const apt = await Apt.findById(req.params.id);

  if (!apt) {
    return next(new ErrorHandler('apt not found with this id ', 404));
  }

  await apt.remove();

  res.status(200).json({
    success: true,
  });
});
