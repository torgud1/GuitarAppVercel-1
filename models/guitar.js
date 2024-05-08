module.exports = (sequelize, Sequelize) => {
    const Guitar = sequelize.define('Guitar', {
        year: Sequelize.DataTypes.DATE,
        price: Sequelize.DataTypes.DOUBLE,
    }, {
        timestamps: false
    });
    Guitar.associate = function (models) {
        Guitar.belongsTo(models.Model)
        Guitar.belongsTo(models.Color)
        Guitar.belongsTo(models.Brand)
    };

    return Guitar
}
