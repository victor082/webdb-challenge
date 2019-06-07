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

        tbl
            .integer('action')
            .unsigned()
            .notNullable()
            .references('action')
            .inTable('action')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};