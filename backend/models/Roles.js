const { uid } = require('uid')
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('Role', {
    // Role schema
    // id uuid
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false,
    },

    name: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
      allowNull: false,
      defaultValue : 'Guest'
    },


  }, {
    timestamps: false,
  });

  Role.associate = models => {
    Role.hasMany(models.User, { foreignKey: 'roleId', targetKey : 'id' });
  };

  return Role;
};


