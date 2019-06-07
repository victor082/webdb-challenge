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

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};