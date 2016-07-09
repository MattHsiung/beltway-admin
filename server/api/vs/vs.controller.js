import request     from 'request';
import _    from 'lodash';

export const get = (req, res, next) => {
  request.get({ 
      // url: `http://api.votesmart.org/${req.action}?${req.params}&key=c355a94e241d247d09a331bf891b7267&o=JSON`, 
      url: 'http://api.votesmart.org/CandidateBio.getBio?key=c355a94e241d247d09a331bf891b7267&candidateId=9490&o=JSON',
      json: true 
    }, 
    (err, response) => {
      res.send(response.body);
  });
};