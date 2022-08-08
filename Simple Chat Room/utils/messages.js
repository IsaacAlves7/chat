// Moment = A JavaScript date library for parsing, validating, manipulating, and formatting dates.
//  Here is where the date of your application stay on
const moment = require('moment'); // moment library require

function formatMessage(username, text){
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;