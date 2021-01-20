module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    })
    return User;

    //need column for email (string) null = false
    //need column for password (string) null = false
}