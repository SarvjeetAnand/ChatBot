const db = require('../config/dbConfig');

const getResponse = (message) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT response FROM chatbot WHERE query = ?';
    db.query(query, [message], (err, results) => {
      if (err) return reject(err);
      if (results.length > 0) {
        resolve(results[0].response);
      } else {
        resolve('Sorry, I didn\'t understand that.');
      }
    });
  });
};

module.exports = { getResponse };
