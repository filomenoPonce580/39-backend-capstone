const service = require("./reviews.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
  
    const review = await service.read(reviewId);
    if (review) {
      res.locals.review = review;
      return next();
    }
    return next({ status: 404, message: `Review cannot be found.` });
}

async function read(req, res) {
    const data = await service.list()
    res.json({ data });
}

async function update(req, res, next) {
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data,
        review_id: res.locals.review.review_id,
    };
    

    const criticId = updatedReview.critic_id
    const critic = await service.readCritic(criticId)


    //data.critic = //something, how we get the critic
    await service.update(updatedReview);

    const update = await service.read(res.locals.review.review_id)

    const data = update;
    console.log('response data & update: ', data, update)
    console.log('critic: ', critic)
    data.critic = critic
    console.log("RESPONSE W/Critic",data)




    res.json({ data });
}

async function destroy(req, res, next) {
    const { reviewId } = req.params
    const data = await service.delete(reviewId);
    res.sendStatus(204);
  }

module.exports = {
    read,
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};