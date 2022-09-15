const conn = require('./conn');
const Item = require('./Item');

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  await Item.create({
    itemName: 'Brocolli',
    quantity: 5,
    imageUrl: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/77935/07b1be564b79cf2fffec0625f6e1a1ed_large.png&width=256&type=webp&quality=80'
  });

  await Item.create({
    itemName: 'Tomato',
    quantity: 10,
    imageUrl:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/12409/66762601587ac569afab2a6f22a3ccdf_large.png&width=256&type=webp&quality=80'
  });

  await Item.create({
    itemName: 'Cabbage',
    quantity: 8,
    imageUrl:'https://cdn.shopify.com/s/files/1/0329/5513/8183/products/1556900303_5ccc69cf7ae62_1024x.png?v=1588909719'
  });

  console.log(`
    Seeding successful!
  `);
};

module.exports = {
  conn,
  syncAndSeed,
  models: {
    Item
  }
};
