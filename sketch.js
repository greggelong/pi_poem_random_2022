let wbl = [
  [],
  ['a', 'I'],
  ['of', 'be', 'is', 'at', 'by', 'up', 'in', 'on', 'he', 'hi'],
  ['all', 'and', 'box', 'are', 'why', 'pig', 'fit', 'fly', 'ask', 'air', 'sea', 'jam', 'pay', 'why', 'out'],
  ['lose', 'find', 'lost', 'mine', 'tape', 'hers', 'with', 'taxi', 'boat', 'duck', 'play', 'ride', 'club', 'term', 'like', 'fast', 'just', 'ball', 'game', 'team', 'best', 'tidy', 'sure', 'kite', 'swim', 'else', 'walk', 'camp', 'life', 'need', 'will', 'able', 'more', 'free', 'rain', 'wind', 'true', 'here', 'bike', 'into', 'long', 'easy', 'hour', 'rise', 'size', 'take', 'sale', 'look', 'post', 'safe', 'open', 'over', 'bank', 'from', 'past', 'high', 'post', 'down', 'stop'],
  ['glove', 'watch', 'whose', 'first', 'found', 'yours', 'being', 'phone', 'phone', 'plane', 'piano', 'board', 'would', 'worry', 'teach', 'start', 'ready', 'score', 'silly', 'shirt', 'cheer', 'enjoy', 'beach', 'early', 'chalk', 'ruler', 'carry', 'maybe', 'level', 'robot', 'space', 'heavy', 'light', 'short', 'lemon', 'price', 'later', 'along', 'cross', 'third', 'meter', 'above', 'river'],
  ['crayon', 'eraser', 'wallet', 'purple', 'camera', 'mobile', 'tennis', 'picnic', 'nobody', 'myself', 'during', 'second', 'litter', 'summer', 'future', 'needed', 'robots', 'market', 'mother', 'taking', 'anyone', 'almost', 'museum', 'across', 'excuse', 'street', 'square', 'middle', 'famous', 'bridge', 'church', 'office'],
  ['careful', 'airport', 'hundred', 'strange', 'sausage', 'monitor', 'promise', 'nothing', 'forward', 'looking', 'friends', 'running', 'playing', 'walking', 'country', 'holiday', 'needing', 'machine', 'traffic', 'bicycle', 'working', 'biscuit', 'looking', 'compare', 'product', 'receive', 'several', 'tourist', 'railway'],
  ['watching', 'hundreds', 'thousand', 'cheering', 'swimming', 'enjoying', 'carrying', 'question', 'machines', 'bicycles', 'biscuits', 'anything', 'anywhere', 'shopping', 'opposite', 'tourists', 'bookshop', 'painting'],
  ['thousands', 'everybody', 'beautiful', 'housework', 'fantastic', 'certainly', 'advantage', 'something', 'guidebook', 'bookshops', 'paintings'],
  ['collecting', 'everything', 'everywhere', 'strawberry'],
  ['sightseeing', 'supermarket', 'underground'],
  [],
  [],
  []
]

let pisent;

function setup() {
  createCanvas(windowWidth,windowHeight);
   
  mouseClicked();
}

function draw() {
  background("#FFA500");
  textSize(70);
  text("3.1415926535",width/4,height/4);
  textSize(35);
  text(pisent,30,height/2);
}

function mouseClicked(){
   pisent = random(wbl[3])+" "+random(wbl[1])+" "+random(wbl[4])+" "+ random(wbl[1])+" "+random(wbl[5])+" "+random(wbl[9])+" "+random(wbl[2])+" "+random(wbl[6])+" "+random(wbl[5])+" "+random(wbl[3])+" "+random(wbl[5]);
  
}