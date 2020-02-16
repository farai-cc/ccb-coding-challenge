module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('category', {

        category_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    return Model;
}