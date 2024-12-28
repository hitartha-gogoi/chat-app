import jwt from 'jsonwebtoken'
import 'dotenv/config'

function authenticate(req, res, next) {
  const token = req.headers['authorization'].split(' ')[1];
  
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(token)
      return res.status(403).send('Invalid Token');
    }
    req.user = user;
    next();
  });
}

export default authenticate