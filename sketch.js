
let customFont;

let reel1 = [
 "ACCENT",
"ACCUMULATE",
"ALIGN",
"AMPLIFY",
"ANALYZE",
"APPROPRIATE",
"ARRANGE",
"ASSEMBLE",
"BEND",
"BLEND",
"BOUNCE",
"BREAK",
"CAPTURE",
"CLAMP",
"COLLAPSE",
"COLLECT",
"COMBINE",
"COMPRESS",
"CONCEAL",
"CONNECT",
"CONTAIN",
"CRUMPLE",
"CRUSH",
"CURL",
"CUT",
"DECONSTRUCT",
"DESTROY",
"DISASSEMBLE",
"DISTORT",
"DISTRIBUTE",
"DOCUMENT",
"DROP",
"ENLARGE",
"EXAGGERATE",
"EXPAND",
"EXTERNALIZE",
"EXTRACT",
"FILTER",
"FLATTEN",
"FOLD",
"FUSE",
"GRIND",
"HANG",
"HIGHLIGHT",
"HURL",
"IMMERSE",
"IMPRINT",
"INFLATE",
"INTERPRET",
"INTERVIEW",
"ITERATE",
"JUXTAPOSE",
"LABEL",
"LAYER",
"LOOP",
"MAKE WEIRD",
"MANIFEST",
"MAP",
"MIMIC",
"MONOPOLIZE",
"NARRATE",
"OBSERVE",
"OUTLINE",
"PERFORM",
"PERSONALIZE",
"PIN",
"QUESTION",
"RATIONALIZE",
"RE-CONTEXTUALIZE",
"REFINE",
"REPEAT",
"REPURPOSE",
"ROLL",
"ROTATE",
"SCRAMBLE",
"SHORTEN",
"SIFT",
"SIMPLIFY",
"SLAP",
"SLICE",
"SMUDGE",
"SNAP",
"SPREAD",
"SQUEEZE",
"STACK",
"STITCH",
"STRAIGHTEN",
"STRETCH",
"SWIRL",
"SYMBOLIZE",
"TANGLE",
"TEAR",
"TILT",
"TRACE",
"TRANSFORM",
"TRANSLATE",
"WARP",
"WEAKEN",
"ZIP"

];

let reel2 = [
  "BALANCE",
"ASYMMETRY",
"BODY",
"BREATH",
"CHAOS",
"CLARITY",
"COLOR",
"CONFUSION",
"CONTRAST",
"CYCLE",
"DENSITY",
"DEPTH",
"DESTINY",
"DIMENSION",
"DIRECTION",
"DISTANCE",
"DREAM",
"DRYNESS",
"DUALITY",
"EXISTENCE",
"FLUIDITY",
"FLUX",
"FORCE",
"FORM",
"FRAGILITY",
"FRAGMENT",
"FRICTION",
"GESTURE",
"GLIMPSE",
"GLITCH",
"GRAVITY",
"HEAVINESS",
"HOLLOWNESS",
"IDENTITY",
"IMAGINATION",
"INFINITY",
"INTERSECTION",
"INVISIBLE",
"KINDNESS",
"LABYRINTH",
"LARGENESS",
"LAYER",
"LIGHT",
"MATTER",
"MOTION",
"MOVEMENT",
"MYSTERY",
"NOSTALGIA",
"OBJECT",
"ORDER",
"PAIN",
"PARADIGM",
"PARADOX",
"PERSON",
"PERSPECTIVE",
"PHENOMENON",
"PRESENCE",
"PULSE",
"PRESSURE",
"QUALITY",
"QUANTITY",
"REALITY",
"REFLECTION",
"RHYTHM",
"RIDDLE",
"RITUAL",
"SCALE",
"SHADOW",
"SHAPE",
"SHARPNESS",
"SILHOUETTE",
"HORIZON",
"SMALLNESS",
"SOFTNESS",
"SOLIDNESS",
"SOLITUDE",
"SOUND",
"SPACE",
"SPECTRUM",
"SPIRAL",
"STILLNESS",
"STRUCTURE",
"SUBSTANCE",
"SURFACE",
"SYMMETRY",
"TENSION",
"TEXTURE",
"THRESHOLD",
"TIME",
"TRANSPARENCY",
"UNCERTAINTY",
"UNITY",
"VAGUENESS",
"VIBRATION",
"VISIBILITY",
"VOID",
"VOLUME",
"WEIGHT",
"WORDS",
"LONELINESS"

];

let reel3 = [
 "ABSTRACTLY",
"AGGRESSIVELY",
"AMBIGUOUSLY",
"APATHETICALLY",
"ARTISTICALLY",
"AWKWARDLY",
"BLUNTLY",
"BRIEFLY",
"CACOPHONOUSLY",
"CALMLY",
"CAREFULLY",
"CARELESSLY",
"CASUALLY",
"CHAOTICALLY",
"CHEERFULLY",
"CLEARLY",
"CLUMSILY",
"CONSCIOUSLY",
"CONTINUOUSLY",
"CRYPTICALLY",
"CYCLICALLY",
"DELIBERATELY",
"DELICATELY",
"EARNESTLY",
"ETERNALLY",
"FIGURATIVELY",
"FLEETINGLY",
"FLUIDLY",
"FORMALLY",
"FRANKLY",
"FRANTICALLY",
"FURIOUSLY",
"GENTLY",
"GRACEFULLY",
"HAPHAZARDLY",
"HESITANTLY",
"IMMEDIATELY",
"IMPULSIVELY",
"INDIFFERENTLY",
"INDIRECTLY",
"INSTINCTIVELY",
"INTENSELY",
"INTROSPECTIVELY",
"IRONICALLY",
"LOGICALLY",
"LOOSELY",
"LOUDLY",
"LUCIDLY",
"MECHANICALLY",
"METHODICALLY",
"METICULOUSLY",
"MINDFULLY",
"MONOTONOUSLY",
"MYSTERIOUSLY",
"NEATLY",
"NERVOUSELY",
"OBJECTIVELY",
"OPTIMISTICALLY",
"ORGANICALLY",
"PARADOXICALLY",
"PASSIONATELY",
"PEACEFULLY",
"PESSIMISTICALLY",
"PLAYFULLY",
"POETICALLY",
"PRECISELY",
"QUIETLY",
"RANDOMLY",
"RAPIDLY",
"RATIONALLY",
"RELENTLESSLY",
"RESTRICTEDLY",
"REVERSELY",
"SADLY",
"SARCASTICALLY",
"SECRETLY",
"SEQUENTIALLY",
"SILENTLY",
"SIMULTANEOUSLY",
"SLOPPILY",
"SOLEMNLY",
"SOMBERLY",
"SPONTANEOUSLY",
"SPORADICALLY",
"SUBJECTIVELY",
"SURREALLY",
"SYMBOLICALLY",
"SYSTEMATICALLY",
"TEMPORARILY",
"TRANSPARENTLY",
"UNCONSCIOUSLY",
"UNEASILY",
"UNIVERSALLY",
"URGENTLY",
"VAGUELY",
"VIGOROUSLY",
"VISCERALLY",
"WEAKLY",
"WHIMSICALLY",
"WISTFULLY"

];

// =========== GLOBALS ===========
let reels = [];         // Will hold our 3 Reel objects
let cellHeight = 200;   // Vertical spacing for each item
let img;

function preload() {
  // Replace with the path or URL for your slot machine image if needed
  img = loadImage("slot.png");
   customFont = loadFont('InstrumentSans-SemiBold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   textFont(customFont); 
  textAlign(CENTER, CENTER);
  textSize(width / 50);

  // Create three Reel objects
  // (x-positions: 1/4, 1/2, 3/4 of the window width)
  reels.push(new Reel(reel1, windowWidth / 4));
  reels.push(new Reel(reel2, windowWidth / 2));
  reels.push(new Reel(reel3, (windowWidth / 4) * 3));
}

function draw() {
  background(255);

  // Update and draw each reel
  for (let r of reels) {
    r.update();
    r.draw();
  }
}

// When mouse is clicked, start spinning each reel
function mouseClicked() {
  for (let r of reels) {
    r.spin();
  }
}

// =========== REEL CLASS ===========
class Reel {
  constructor(items, x) {
    this.items = items;
    this.x = x;
    this.offset = 0;        // Vertical scroll offset
    this.speed = 0;         // Scroll speed (pixels per frame)
    this.spinning = false;
    this.spinStart = 0;
    this.spinDuration = 0;
  }

  spin() {
    this.spinning = true;
    this.spinStart = millis();
    // Random spin duration
    this.spinDuration = random(500, 2500);
    // Example fixed speed, or you can randomize it:
    // this.speed = random(10, 15);
    this.speed = sin(80.0) * 80; 
  }

  update() {
    if (this.spinning) {
      let elapsed = millis() - this.spinStart;

      if (elapsed < this.spinDuration) {
        // Keep scrolling
        this.offset += this.speed;
      } else {
        // Time to stop
        this.spinning = false;

        // Snap to the nearest cell so we land neatly on an item
        let cellIndex = round(this.offset / cellHeight);
        this.offset = cellIndex * cellHeight;
      }
    }
  }

  draw() {
    // The total height of the full list
    let totalHeight = this.items.length * cellHeight;

    // Mod the offset so it "wraps" around
    let wrapOffset = this.offset % totalHeight;
    if (wrapOffset < 0) {
      wrapOffset += totalHeight;
    }

    // Draw each item
    for (let i = 0; i < this.items.length; i++) {
      let itemText = this.items[i];
      let y = (i * cellHeight) - wrapOffset + height / 2;

      // Split itemText by spaces
      let words = split(itemText, " ");

      // Draw main copy
      drawItemText(words, this.x, y);

      // For seamless looping, draw the same item below if needed
      let y2 = y + totalHeight;
      if (y2 < height + cellHeight) {
        drawItemText(words, this.x, y2);
      }
      // And above if needed
      let y3 = y - totalHeight;
      if (y3 > -cellHeight) {
        drawItemText(words, this.x, y3);
      }
    }

    // White rectangles to mask areas above and below main slot window
    fill(255);
    noStroke();
    rect(0, 0, width, height / 2 - 200);     // Top mask
    rect(0, 0, width / 4 - 200, height);     // Left mask

    // Finally, draw the slot machine overlay image
    // Adjust the last two parameters if your image alignment differs
    image(img, 0, 0, width, height, 0, 0, img.width, img.height + 200);
  }
}

// =========== HELPER FUNCTION: DRAW ITEM TEXT ===========
function drawItemText(words, x, y) {
  fill(0);

  if (words.length > 1) {
    // First word on one line, the rest on the second line
    let line1 = words[0];
    let line2 = words.slice(1).join(" ");

    text(line1, x, y - width/94);
    text(line2, x, y + width/94);
  } else {
    // Single word or no spaces
    text(words[0], x, y);
  }
}
