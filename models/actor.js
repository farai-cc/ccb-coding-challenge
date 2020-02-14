module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('actor', {

        actor_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }


    },
    {
        indexes: [
            {
                unique: false,
                fields: ['last_name']
            }
        ]
    })

    return Model;
}