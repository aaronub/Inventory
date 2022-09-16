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

  await Item.create({
    itemName: 'Carrot',
    quantity: 6,
    imageUrl:'http://cdn.shopify.com/s/files/1/0329/5513/8183/products/1556900304_5ccc69d01920d_1024x.png?v=1589615411'
  });

  await Item.create({
    itemName: 'Mushroom',
    quantity: 6,
    imageUrl:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2327395/44275184a40e6913c7fa7d0778bec54b_large.png&width=256&type=webp&quality=80'
  });

  await Item.create({
    itemName: 'Apple',
    quantity: 10,
    imageUrl:'https://hl-grocery-prod-master.imgix.net/products/3045265f51d2eb634f9039b01839b001beee3179?fill=solid&fit=fill&fm=jpg&h=256&pad=7&q=92&trim=auto&trim-md=0&w=256'
  });

  await Item.create({
    itemName: 'Grape',
    quantity: 12,
    imageUrl:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00000000042710/e16b85c2a378b1d0a048c4acd4bdae32_large.png&width=256&type=webp&quality=80'
  });

  await Item.create({
    itemName: 'Banana',
    quantity: 10,
    imageUrl:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2313224/f84842c87780674cede6fbbc5f57a41b_large.png&width=256&type=webp&quality=80'
  });

  await Item.create({
    itemName: 'Blueberry',
    quantity: 12,
    imageUrl:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684706364742/0651645a8646ad5cdafc80bb0df6a734_large.png&width=256&type=webp&quality=80'
  });

  await Item.create({
    itemName: 'Kiwi',
    quantity: 13,
    imageUrl:'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2311256/6d3f0875396139948eea9f3252be003c_large.png&width=256&type=webp&quality=80'
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
