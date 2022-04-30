const asyncWrapper = (func) => {
  return async(req, res, next) => {
    try {
      await fn(req, res, next) 
    } catch (err) {
      next(error)
    }
  };
};

module.exports = asyncWrapper;