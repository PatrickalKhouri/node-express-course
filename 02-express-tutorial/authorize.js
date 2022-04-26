const authorize = (req, res, next) => {
  const {user} = req.query
  if (user === 'john') {
    req.user = {name : 'john'}
    next()
  } else (
    res.status(401).send('unauthorized')
  )
  next();
}

module.exports = authorize