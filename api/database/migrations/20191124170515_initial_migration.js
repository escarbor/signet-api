
exports.up = function(knex) {
    return knex.raw('CREATE EXTENSION "uuid-ossp"')
    .then(() => {
        return knex.schema
            .createTable('entries', function (table) {
            table.increments('id').primary();
            table.uuid('entry_id').notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('title', 255).notNullable();
            table.string('image_url', 255);
            table.string('description', 500);
            table.boolean('isDeleted').defaultTo(false);
            table.unique('entry_id')
        });
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("entries");
};
