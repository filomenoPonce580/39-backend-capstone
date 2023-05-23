const knex = require("../db/connection");

function read(reviewId) {
    return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

function readCritic(criticId){
    return knex("critics").select("*").where({critic_id: criticId}).first();
}

//OG, not with critic inside
function update(updatedReview) {
      return knex("reviews")
        .select("*")
        .where({ review_id: updatedReview.review_id })
        .update(updatedReview, "*");
}




// function update(updatedReview) {
//     return knex("reviews as r")
//       .join("critics as c", "r.critic_id", "c.critic_id")    
//       .select("r.*", "c.*")
//       .where({ review_id: updatedReview.review_id })
//       .first();
// }

function destroy(reviewId) {
    return knex("reviews").where({review_id: reviewId}).del();
}
function list(){
    return knex("reviews").select("*")
}

module.exports = {
    list,
    read,
    readCritic,
    update,
    delete: destroy,
};