exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', function (tbl) {
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();
        tbl
            .text('description', 128)
            .notNullable()

        tbl
            .boolean('completed')
            .defaultTo(false)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};