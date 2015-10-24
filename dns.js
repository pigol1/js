/**
 * Created by piyush.goel on 25/10/15.
 */
var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, addresses, family) {
    console.log('addresses:', addresses);
});