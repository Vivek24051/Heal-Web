const express = require('express');
const {
  newApt,
  getSingleApt,
  myApts,
  getAllApts,
  deleteApt,
} = require('../controllers/aptController');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/apt/new').post(isAuthenticatedUser, newApt);

router.route('/apt/:id').get(isAuthenticatedUser, getSingleApt);

router.route('/apts/me').get(isAuthenticatedUser, myApts);

router
  .route('/admin/apts')
  .get(isAuthenticatedUser, authorizeRoles('admin'), getAllApts);

router
  .route('/admin/apt/:id')
  .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteApt);

module.exports = router;
