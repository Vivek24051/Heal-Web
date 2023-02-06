const express = require('express');
const {
  getAllDiseas,
  createDisea,
  updateDisea,
  deleteDisea,
  getDiseaDetails,
  createDiseaReview,
  getDiseaReviews,
  deleteReview,
} = require('../controllers/diseaController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route('/diseas').get(getAllDiseas);

router
  .route('/admin/disea/new')
  .post(isAuthenticatedUser, authorizeRoles('admin'), createDisea);

router
  .route('/admin/disea/:id')
  .put(isAuthenticatedUser, authorizeRoles('admin'), updateDisea)
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteDisea);

router.route('/disea/:id').get(getDiseaDetails);

router.route('/review').put(isAuthenticatedUser, createDiseaReview);

router
  .route('/reviews')
  .get(getDiseaReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
