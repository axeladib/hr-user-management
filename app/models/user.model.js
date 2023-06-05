const User = (sequelize,Sequelize,DataTypes) => sequelize.define('user',{
    username:{
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
        validate: {
            len: [5,10],
            isAlphanumeric: true            
        }
    },
    //setter for hashed password
    password: {
        type: DataTypes.STRING(12),
        allowNull: false,
        validate: {
            len: {
                args: [6,12],
                msg: 'password length minimum is 6 and maximum is 12'
            },
            // is: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/ //regex            
        },
        // set(value){
        //     this.setDataValue('password', hash(value));
        // }

    },
    email: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    }
});

module.exports = User;
