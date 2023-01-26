const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Payment extends Model {}

Payment.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            validate:{
                isUUID: 4,
            },
        },
        nameOnCard: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cardNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isCreditCard: true,
            },
        },
        expirationDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        cvv: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        carId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'car',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'payment',
    }
);

module.exports = Payment;