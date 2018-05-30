module.exports = () => {
  return (req, res, next) => {
    req.startTime = new Date;
    req.on('end', () => {
      const duration = new Date - req.startTime;
      const started = `${req.startTime.toLocaleDateString()} ${req.startTime.toLocaleTimeString()}`;
      console.log(`${req.method} "${req.url}" ${res.statusCode} ${duration}ms ${started}`);
    });
    next();
  }
}
