// Create and export film_category model to be used to be used for querying using sequelize and creating film_category table in database
module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('film_category', {

        film_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },

        category_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            primaryKey: true

        }

    })

    return Model;
}