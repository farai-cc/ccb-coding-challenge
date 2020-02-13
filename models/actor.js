module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('actors', {

        actor_id: {
            type: DataTypes.SMALLINT.AUTO_INCREMENT,
            allowNull: false,
            autoIncrement: true
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devour: DataTypes.BOOLEAN
    })

    return Model;
}

actor_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (actor_id),
  KEY idx_actor_last_name (last_name)