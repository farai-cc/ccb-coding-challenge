// Create and export film model to be used to be used for querying using sequelize and creating film table in database
module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('film', {

        film_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            defaultValue: null
        },

        release_year: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },

        language_id: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false
        },

        original_language_id: {
            type: DataTypes.TINYINT.UNSIGNED,
            defaultValue: null
        },

        rental_duration: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            defaultValue: 3
        },

        rental_rate: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 4.99
        },

        length: {
            type: DataTypes.SMALLINT.UNSIGNED,
            defaultValue: null
        },

        replacement_cost: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false,
            defaultValue: 19.99
        },

        rating: {
            type: DataTypes.ENUM('G','PG','PG-13','R','NC-17'),
            defaultValue: 'G'
        },

        special_features: {
            type: DataTypes.STRING,
            defaultValue: null
        }

    },
    {
        indexes: [
            {
                unique: false,
                fields: ['title','language_id','original_language_id']
            }
        ]
    })

    return Model;
}