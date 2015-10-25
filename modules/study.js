/**
 * study management functions
 *
 * see this https://github.com/powmedia/pow-mongodb-fixtures for testing...
 */

const COLLECTION_NAME = 'collection';
const ObjectID = require('mongodb').ObjectID;

function createStudy(db, study){
  let collection = db.collection(COLLECTION_NAME);

  return new Promise(function(resolve, reject){
    collection.insert([study], (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

function getStudyByID(db, id){
  let collection = db.collection(COLLECTION_NAME);

  return new Promise(function(resolve, reject){
    collection.find({_id: ObjectID(id)}, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}