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