exports.up = function (knex, Promise) {
    return knex.schema.createTable('action', function (tbl) {
        tbl.increments();

        tbl
            .text('description', 128)
            .notNullable()

        tbl
            .text('notes', 128)

        tbl
            .boolean('completed')
            .defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};