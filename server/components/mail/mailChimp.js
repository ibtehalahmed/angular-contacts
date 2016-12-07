/**
 * Created by iAboShosha on 3/19/16.
 */
'use strict';

var http = require('http'),
  request = require('request'),
  promise = require('bluebird');

var config = {
  dataCenter: 'us13',
  baseUrl: 'api.mailchimp.com/3.0/',
  apiKey: '247ea17052b545eb05a354ae10854bdb-us13'
};

var baseUrl = ()=> {
  return 'http://' + config.dataCenter + '.' + config.baseUrl
};


var basePost = (action, data)=> {
  return new promise(function (resolve, reject) {
    request.post({
      url: baseUrl() + action,
      headers: {
        Authorization: 'arzaq ' + config.apiKey,
        "content-type": "application/json"
      },
      json: data
    }, function (error, response, body) {
      if (error) {
        reject(error);
        console.log('error==========');
        console.log(error)
      } else {
        resolve(body);
        console.log('body==========');
        console.log(body)
      }
    });
  });
};

var addMember = (listId, fname, lname, email)=> {
  return basePost('lists/' + listId + '/members', {
    "status": "subscribed",
    "email_address": email,
    "merge_fields": {
      FNAME: fname,
      LNAME: lname
    }
  });
};

exports.addMemberToAllUser = (fname, lname, email) => {
  return addMember('bf852485a7', fname, lname, email);
};

exports.addMemberToSeller = (fname, lname, email)=> {
  return addMember('e2b4953c41', fname, lname, email);
};



