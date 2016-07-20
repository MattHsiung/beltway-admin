import jwt                     from 'jwt-simple';
import User                    from '../api/users/user.model';
import {createJWT, verifyUser} from './auth-util'
import {ADMIN_KEY}             from './config';

/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
  export const login = (req, res) => {
    User.findOne({ email: req.body.email }, '+password', function(err, user) {
      if (!user) {
        return res.status(401).send({ message: 'Invalid email and/or password' });
      }
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (!isMatch) {
          return res.status(401).send({ message: 'Invalid email and/or password' });
        }
        res.send({ token: createJWT(user) });
      });
    });
  };

/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */
  export const signup = (req, res) => {
    if (req.body.adminKey !== ADMIN_KEY) {
      return res.status(403).send({ message: 'Invalid key' });
    }

    User.findOne({ email: req.body.email }, function(err, existingUser) {
      if (existingUser) {
        return res.status(409).send({ message: 'Email is already taken' });
      }

      var user = new User({
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password
      });

      user.save(function(err, result) {
        if (err) {
          res.status(500).send({ message: err.message });
        }
        res.send({ token: createJWT(result) });
      });
    });
  };
