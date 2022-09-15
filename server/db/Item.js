const Sequelize = require('sequelize');
const conn = require('./conn');

const Item = conn.define('items', {
  itemName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl:{
    type: Sequelize.STRING,
    defaultValue: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2023197/c7747e6892eb2b4fd5d79bd51d4e1f0c_large.png&width=256&type=webp&quality=80'
  }
});

module.exports = Item;
