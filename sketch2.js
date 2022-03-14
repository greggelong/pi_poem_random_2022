let wbl = [[], ['a', 'I', 'a', 'I'], ['up', 'go', 'in', 'at', 'in', 'to'], ['off', 'one', 'gun', 'row', 'set', 'sir', 'tie', 'try'], ['beat', 'bell', 'boss', 'call', 'cold', 'deaf', 'edge', 'fall', 'fear', 'fork', 'give', 'hang', 'harm', 'care', 'heat', 'help', 'lady', 'note', 'once', 'ouch', 'ours', 'pass', 'pool', 'rock', 'role', 'rose', 'sock', 'soft', 'time', 'take', 'care', 'tent', 'tiny', 'best', 'type', 'used', 'West', 'whom', 'wing', 'wood', 'zero'], ['blind', 'blood', 'cross', 'fetch', 'knife', 'laugh', 'light', 'while', 'paint', 'pilot', 'serve', 'spare', 'speak', 'spoon', 'still', 'stone', "one's"], ['absent', 'candle', 'direct', 'double', 'effort', 'expect', 'fairly', 'asleep', 'flight', 'health', 'Indian', 'intend', 'jacket', 'pardon', 'proper', 'school', 'seldom', 'smooth', 'starve', 'stupid', 'sudden', 'thanks', 'wealth'], ['achieve', 'balloon', 'because', 'bedside', 'exactly', 'handbag', 'Italian', 'officer', 'pancake', 'postman', 'quarter', 'require', 'similar', 'speaker', 'succeed', 'wealthy'], ['calendar', 'catch up', 'electric', 'yourself', 'industry', 'kindness', 'physical', 'climbing', 'straight', 'whenever', 'yourself'], ['agreement', 'education', 'full-time', 'gentleman', 'including', 'secondary', 'secretary', 'transport', 'Westerner'], ['invitation'], [], ['cheeseburger', 'disappointed'], ['school-leaver'], []]
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