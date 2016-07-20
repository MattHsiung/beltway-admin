import request      from 'request';
import _            from 'lodash';
import {VS_API_KEY} from '../../auth/config'
import actions      from './actions';

const getUrl = (category, action, input) => {
  var inputString = '';

  for(var type in input) {
    inputString += `&${type}=${input[type]}`;
  };

	return `http://api.votesmart.org/${category}.${action.action}?key=${VS_API_KEY}${inputString}&o=JSON`
};

export const post = (req, res, next) => {
	var {category, action, input} = req.body;

  request.get({
      url: getUrl(category, action, input),
      json: true 
    }, 
    (err, response) => {
      console.log(err, response.body)
    	if(response.body.error){
        return res.status(400).send({ message: response.body.error.errorMessage });
      } 
      return res.send(response.body[action.output]);
  });
};

export const get = (req, res, next) => {
  res.json(actions);
};