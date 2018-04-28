module.exports = (req, res, next) => {
  if (!!req.headers.token) console.log("Ok");
  else return res.status(400).json("nao tem token, por favor passe o token");

  next();
};
