module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		name: {
			type: Sequelize.STRING,
		},
		overallAttendance: {
			type: Sequelize.STRING,
		},
		latecomers: {
			type: Sequelize.INTEGER,
		},
		emergencyLeave: {
			type: Sequelize.INTEGER,
		},
		outsideWork: {
			type: Sequelize.INTEGER,
		},
		sickLeave: {
			type: Sequelize.INTEGER,
		},
		annualLeave: {
			type: Sequelize.INTEGER,
		},
	});

	return User;
};
