
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {

        firstName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },


        lastName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },


        username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },


        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        encryptedPassword: {
            type: Sequelize.DataTypes.BLOB,

            allowNull: false,
        },

        // role id  uuid
        roleId: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.UUIDV4,
        },
    },
        {
            timestamps: false,
        }
    );


    User.associate = models => {
        User.belongsTo(models.Role, { foreignKey: 'roleId' });
    };
    return User;
};
