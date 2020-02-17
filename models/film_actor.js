// Create and export film_actor model to be used to be used for querying using sequelize and creating film_actor table in database
module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('film_actor', {

        actor_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            primaryKey: true

        },

        film_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        }

    })

    return Model;
}