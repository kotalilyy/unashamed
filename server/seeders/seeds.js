const faker = require('faker');

const db = require('../config/connection');
const { Blog } = require('../models');

db.once('open', async () => {
  await Blog.deleteMany({});

  // create user data
  const blogData = [];

  for (let i = 0; i < 20; i++) {
    const title = faker.company.catchPhrase();
    const author = faker.name.findName();
    const pages = faker.random.number();

    blogData.push({ title, author, pages });
  }
  await Blog.collection.insertMany(blogData);

  console.log('all done!');
  process.exit(0);
});
