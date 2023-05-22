
exports.up = function(knex) {
    return knex.schema.createTable("critics", (table) => {
        table.increments("critic_id").primary()//.unsigned().notNullable(); // Sets critic_id as the primary key
        table.string("preferred_name"); //critics preferred first name
        table.string("surname"); //last name
        table.string("organization_name"); //org name
        table.timestamps(true, true); // Adds created_at and updated_at columns
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("critics");
};
