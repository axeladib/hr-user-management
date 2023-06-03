module.exports = (app) => {
	const users = require("../controllers/user.controller.js");

	var router = require("express").Router();

	// Create a new User
	router.post("/", users.create);

	// Delete a User with id
	router.delete("/:id", users.delete);

	// Delete all Users
	router.delete("/", users.deleteAll);

	// Update a User with id
	router.put("/:id", users.update);

	// Retrieve all Users
	router.get("/", users.findAll);

	// Retrieve a single User with id
	router.get("/:id", users.findOne);

	app.use("/api/users", router);
};
