/**
 * Created by iAboShosha on 3/17/16.
 */
'use strict';

var path = require('path');
var _ = require('lodash');
var promise = require('bluebird');

module.exports = {
  exec: ()=> {
    var files = [
      //'./seed'
    ];


    var run = (file)=> {
      return require(file).up().then((a)=> {
        console.log('finished populating ' + a);
      });
    };
    var exec = (index)=> {

      if (index < files.length) {
        return run(files[index])
          .then(()=> {
            return exec(++index)
          })
      } else {
        return promise.all([])
      }

    };

    return exec(0);


  }
};
