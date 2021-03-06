exports.up = function (knex) {
    return (
      knex.schema
        // users
        .createTable("users", tbl => {
          tbl.increments();
  
          tbl.string("username", 128).notNullable().unique().index();
          tbl.string("password", 256).notNullable();

          tbl.string("department", 256)
  
        })
    );
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
  };