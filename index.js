fs = require('fs');

var peers1 = JSON.parse(fs.readFileSync('peers1.json', {encoding: 'UTF-8'}));
var peers2 = JSON.parse(fs.readFileSync('peers2.json', {encoding: 'UTF-8'}));

console.log('Node #1:', Object.keys(peers1.peers).length);
console.log('Node #2:', Object.keys(peers2.peers).length);

var commonpeers = [];
var noncommonpeers1 = [];
var noncommonpeers2 = [];

for(peer in peers1.peers){
  if(peers2.peers[peer]){
    commonpeers.push(peer);
  } else {
    noncommonpeers1.push(peer);
  }
}

for(peer in peers2.peers){

  if(commonpeers.includes(peer)){
    continue
  }

  if(peers1.peers[peer]){
    commonpeers.push(peer);
  } else {
    noncommonpeers2.push(peer);
  }
}

console.log('\nCommon:', commonpeers.length);
console.log('Non-Common:', noncommonpeers1.length + noncommonpeers2.length);

console.log('\nNon-Common #1:', noncommonpeers1.length);
console.log('Non-Common #2:', noncommonpeers2.length);