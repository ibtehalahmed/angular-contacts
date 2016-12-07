'use strict';
var mandrill = require('node-mandrill')('yvful8wAtIyZ35-YdzbQ2g');
export function sendemail(templateName, to, name, token) {
  console.log('ccc');
  var from = "confirmation@thinkloud.co";
  var fromName = 'ArzaqStores.com';
  if (typeof to === 'string') {
    var toAddress = [
      {
        email: to
      }
    ];
  }else{
    var toAddress=to;
  }
  mandrill('/messages/send-template', {
    "template_name": templateName,
    template_content: [{}
    ],
    message: {
      from_email: from,
      from_name: fromName,
      "global_merge_vars": [
        {
          "name": "NAME",
          "content": name
        }, {
          "name": "TOKEN",
          "content": token
        }
      ],
      to: toAddress
    },
    "async": true
  }, function (error, response) {
    if (error) console.log(JSON.stringify(error));
    else console.log(response);
  });
}

