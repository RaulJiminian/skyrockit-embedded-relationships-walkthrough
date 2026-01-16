const { Router } = require("express");
const controllers = require("../controllers/applications.js");

const router = Router();

// GET ‘/applications’ => Render the Index Page; [CRUD] GET all applications
// GET ‘/applications/new’ => Render the Form Page to create a new application
// POST ‘/applications’ => [CRUD] Create a new application; Redirect to "/applications"
// GET ‘/applications/:applicationId’ => Render Show Page; [CRUD] GET one application by id
// GET ‘/applications/:applicationId/edit’ => Render edit Form Page to update an application
// PUT ‘/applications/:applicationId’ => [CRUD] Find an application by it's id and update; Redirect to "/applications/:applicationId"
// Delete	DELETE ‘/applications/:applicationId’ => [CRUD] Find an application by it's id and delete; Redirect to "/applications"

module.exports = router;
