const mongoose = require('mongoose');

const diseaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Disea Name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please Enter Disea Description'],
  },
  charges: {
    type: Number,
    required: [true, 'Please Enter Disea charges'],
    maxLength: [8, 'Charges cannot exceed 8 characters'],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please Enter Disea Category'],
  },
  Stock: {
    type: Number,
    required: [true, 'Please Enter Disea Stock'],
    maxLength: [4, 'Stock cannot exceed 4 characters'],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Diese', diseaSchema);
