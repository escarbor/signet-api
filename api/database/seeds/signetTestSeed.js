
exports.seed = function(knex) {
  return knex('entries').del()
    .then(function () {
      return knex('entries').insert([
        {entry_id: '1aa80268-8011-4a19-ae74-470f37231030', title: 'Cortland', image_url: 'shorturl.at/cvAIS', description: 'One of the more successful McIntosh offspring, with all the usual characteristics, including the sweet vinous flavor. High quality red apple with dark red streaks. White colored flesh that is crisp & tart, but sweet. A juicy salad apple that does not brown for hours after slicing.', isDeleted: false},
        {entry_id: '7d8a0942-7a67-4a63-9359-cdbd960c8034', title: 'Dabinett', image_url: 'shorturl.at/lp056', description:'Grows well in North America (Northwest, New England, Great Lakes)', isDeleted: false},
        {entry_id: 'c3c99828-ba09-4294-b4a7-88b0edaf759c', title: 'Arkansas Black', image_url: 'shorturl.at/fquHY', description:'The Arkansas Black is an apple cultivar that originated in the mid-19th Century in Benton County, Arkansas. It is not the same as the cultivar "Arkansas" or "Arkansas Black Twig". Arkansas Black apples are generally medium-sized with a somewhat flattened shape.', isDeleted: false}
      ]);
    });
};
