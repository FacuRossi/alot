const moment = require('moment')

exports.seed = function (knex, Promise) {
  return knex('workshops').del()
    .then(function () {
      return knex('workshops').insert([
        {id: 88801, category_id: 77701, name: 'Basic Sewing Workshop', description: '2 hours *Great for beginners', body: 'In this workshop you will learn how to use a sewing machine and the stitching basics', image: '/workshop-images/sewing.jpg', instructor: 'Mary Valentine', date_time: moment.utc('2018-10-20 20:00 +0000', 'YYYY-MM-DD HH:mm Z').format()},
        {id: 88803, category_id: 77704, name: 'Build a Birdhouse', description: '3 hours *Kid-friendly', body: 'In this workshop you will build your own wooden birdhouse. Once completed, it can be decorated with paint.', image: '/workshop-images/birdhouse.jpg', instructor: 'Peter Parker', date_time: moment.utc('2018-10-06 22:30 +0000', 'YYYY-MM-DD HH:mm Z').format()},
        {id: 88805, category_id: 77702, name: 'Make Your Own Compost', description: '1 hour *Bring your own gloves', body: 'Learn how to make compost for your own garden and make your plants grow like mad!', image: '/workshop-images/compost.jpg', instructor: 'Jake Norris', date_time: moment.utc('2018-10-12 4:30 +0000', 'YYYY-MM-DD HH:mm Z').format()},
        {id: 88806, category_id: 77704, name: 'Build a TV Cabinet', description: '5 hours *Some experience needed', body: 'In this workshop you will build your own TV cabinet that you can take home. You will also walk away with the satisfaction of beging able to tell people you built it yourself!', image: '/workshop-images/tv-cabinet.jpg', instructor: 'Jasper Moore', date_time: moment.utc('2018-10-09 3:30 +0000', 'YYYY-MM-DD HH:mm Z').format()},
        {id: 88807, category_id: 77703, name: 'Paint a Room', description: '2 hours', body: 'Learn how to paint walls, trims and ceilings. Also get tips on paint prep and using paint tools', image: '/workshop-images/painting-room.jpg', instructor: 'Kelly Webber', date_time: moment.utc('2018-10-14 23:30 +0000', 'YYYY-MM-DD HH:mm Z').format()}
      ])
    })
}
