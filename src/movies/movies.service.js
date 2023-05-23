const knex = require("../db/connection");

async function list(is_showing) {
  return knex("movies as m")
    .select("m.*")
    .modify((queryBuilder) => {
      if(is_showing){
        queryBuilder.join("movies_theaters as mt",
           "m.movie_id",
          "mt.movie_id"
          )
          .where({"mt.is_showing": true})
          .groupBy("m.movie_id");
      }
    });
}

async function read(movie_id){
  return knex("movies").where({movie_id}).first()
}

module.exports = {
  list,
  read,
};
