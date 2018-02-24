module.exports = (req,res,next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({error: 'Not enough credits buddy'});
  }

  next(); // go on to the next middleware in the chain
};