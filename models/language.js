// Create and export language model to be used to be used for querying using sequelize and creating lanugage table in database
module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('language', {

        language_id: {
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