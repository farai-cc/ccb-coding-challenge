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