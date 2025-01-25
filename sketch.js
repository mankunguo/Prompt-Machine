
let customFont;

let reel1 = [
  "BEND",
"BOUNCE",
"CAPTURE",
"CARVE",
"CLAMP",
"COLLAPSE",
"CREASE",
"CRUMPLE",
"CRUSH",
"CURL",
"DANGLE",
"DISTORT",
"DISTRIBUTE",
"DRIP",
"DROP",
"ENHANCE",
"ENLARGE",
"EXAGGERATE",
"EXPAND",
"EXTEND",
"FLATTEN",
"FOLD",
"FUSE",
"GRIND",
"GRIP",
"HOOK",
"HURL",
"IGNITE",
"IMPRINT",
"INFLATE",
"INK",
"INTERVIEW",
"LAYER",
"LISTEN",
"LOOP",
"MAKE IT WEIRD",
"MIMIC",
"MOLD",
"PERSONALIZE",
"PIN",
"PLUCK",
"PUFF",
"REARRANGE",
"RE-CONTEXTUALIZE",
"REPEAT",
"ROLL",
"SCRAMBLE",
"SCRAPE",
"SCRATCH",
"SHAKE",
"SHORTEN",
"SHRED",
"SIFT",
"SLAP",
"SLICE",
"SLIDE",
"SMUDGE",
"SNAP",
"SPATTER",
"SPRINKLE",
"SQUEEZE",
"SQUISH",
"STACK",
"STAIN",
"STITCH",
"STORE",
"STRAIGHTEN",
"SWIRL",
"TANGLE",
"TAP",
"TILT",
"TRACE",
"TRANSLATE",
"TUCK",
"TWIST",
"WARP",
"WELD",
"WHIRL",
"WRAP",
"ZIP",
"ALIGN",
"ASSEMBLE",
"BREAK",
"COMPRESS",
"DECORATE",
"DISASSEMBLE",
"ERODE",
"FILTER",
"HIGHLIGHT",
"IMMERSE",
"LAYER",
"PERFORATE",
"POLISH",
"REFINE",
"ROTATE",
"SCATTER",
"STRETCH",
"TEAR",
"TRANSFORM",
"AMPLIFY"
];

let reel2 = [
  "PART OF BODY",
"SOMETHING FROSTED",
"SOMETHING SWEET",
"SOMETHING CLOSEST AROUND",
"SOMETHING FADED",
"SOMETHING GIANT",
"SOMETHING ROUGH-TEXTURED",
"SOMETHING EASY TO BE FORGOTTEN",
"SOMETHING SCULPTED",
"SOMETHING ERODED",
"SOMETHING STRAIGHT",
"SOMETHING CURL",
"SOMETHING REFLECTIVE",
"SOMETHING LAYERED",
"SOMETHING TRIGGER BAD MEMORIES",
"SOMETHING LOUD",
"SOMETHING BENEATH THE SURFACE",
"SOMETHING FOGGY",
"SOMETHING SOLID",
"SOMETHING ROUGH",
"SOMETHING COLD",
"SOMETHING METALLIC",
"SOMETHING STICKY",
"SOMETHING HOLLOW",
"SOMETHING TRANSPARENT",
"SOMETHING RIPPLED",
"SOMETHING BRITTLE",
"SOMETHING SHARP",
"SOMETHING FRAGILE",
"SOMETHING HEAVY",
"SOMETHING SLIMY",
"SOMETHING MAGNETIC",
"SOMETHING GLOWING",
"SOMETHING MUTED",
"SOMETHING WET",
"SOMETHING DRY",
"SOMETHING BUMPY",
"SOMETHING TANGY",
"SOMETHING POROUS",
"SOMETHING VELVETY",
"SOMETHING GRAINY",
"SOMETHING POINTY",
"SOMETHING DULL",
"SOMETHING RADIANT",
"SOMETHING FRAGRANT",
"SOMETHING ODORLESS",
"SOMETHING UNEVEN",
"SOMETHING BLURRED",
"SOMETHING CRUMBLY",
"SOMETHING CRUNCHY",
"SOMETHING WATERY",
"SOMETHING CHILLED",
"SOMETHING VISCOUS",
"SOMETHING HOLLOW-SOUNDING",
"SOMETHING DENSE",
"SOMETHING FLAKY",
"SOMETHING DOMED",
"SOMETHING GLITCHY",
"SOMETHING JAGGED",
"SOMETHING VIBRATING",
"SOMETHING SYMMETRICAL",
"SOMETHING ASYMMETRICAL",
"SOMETHING ROUNDED",
"SOMETHING ANGULAR",
"SOMETHING WRINKLED",
"SOMETHING TRANSLUCENT",
"SOMETHING TWISTED",
"SOMETHING INTERWOVEN",
"SOMETHING FUZZY",
"SOMETHING SPIKY",
"SOMETHING PLUMP",
"SOMETHING STRETCHED",
"SOMETHING FRAGMENTED",
"SOMETHING ABSORBENT",
"SOMETHING STRETCHY",
"SOMETHING FLEXIBLE",
"SOMETHING IRIDESCENT",
"SOMETHING CORRUGATED",
"SOMETHING ELECTRIC",
"SOMETHING PULSATING",
"SOMETHING WOBBLY",
"SOMETHING CRYSTAL-LIKE",
"SOMETHING FLATTENED",
"SOMETHING LUMINOUS",
"SOMETHING FLICKERING",
"SOMETHING OVERSIZED",
"SOMETHING MINIATURE",
"SOMETHING COMPACT",
"SOMETHING EXPANDING",
"SOMETHING INVISIBLE",
"SOMETHING VIBRANT",
"SOMETHING OPAQUE",
"SOMETHING SATURATED",
"SOMETHING PATCHY",
"SOMETHING GLAZED",
"SOMETHING EMBOSSED",
"SOMETHING RECESSED",
"SOMETHING ELASTIC",
"SOMETHING DELICIOUS",
"SOMETHING SURREAL"
];

let reel3 = [
 "ABRUPTLY",
"FOGGILY",
"ACCURATELY",
"ADORABLY",
"AGGRESSIVELY",
"AMBITIOUSLY",
"ANGRILY",
"CONTRADICTORILY",
"ANXIOUSLY",
"AWKWARDLY",
"BEAUTIFULLY",
"BOLDLY",
"BRAVELY",
"MONUMENTALLY",
"BRIEFLY",
"BRUTALLY",
"CALMLY",
"CAREFULLY",
"CASUALLY",
"CHEERFULLY",
"CLUMSILY",
"COMFORTABLY",
"CONFIDENTLY",
"CONSTANTLY",
"DIZZILY",
"COOLLY",
"CRAZILY",
"CREATIVELY",
"CURIOUSLY",
"DECISIVELY",
"DEEPLY",
"DELICATELY",
"DENSELY",
"DESPERATELY",
"DETERMINEDLY",
"DIFFERENTLY",
"DISCREETLY",
"EAGERLY",
"DRAMATICALLY",
"ELEGANTLY",
"ENDLESSLY",
"ENERGETICALLY",
"ENTIRELY",
"EQUALLY",
"EVENLY",
"EXACTLY",
"FAITHFULLY",
"FIERCELY",
"FLUENTLY",
"FORCIBLY",
"FRANTICALLY",
"ERRATICALLY",
"FREELY",
"FREQUENTLY",
"FRIVOLOUSLY",
"GENTLY",
"GLADLY",
"GRACEFULLY",
"GREATLY",
"LISTLESSLY",
"HARSHLY",
"HASTILY",
"HELPLESSLY",
"HONESTLY",
"HOPELESSLY",
"HUMOROUSLY",
"HURRIEDLY",
"INCREDIBLY",
"INTENSELY",
"JOYFULLY",
"LAZILY",
"LIGHTLY",
"LOUDLY",
"IMPRESSIVELY",
"LOVINGLY",
"MAGICALLY",
"MAJESTICALLY",
"MISERABLY",
"EXCESSIVELY",
"SUBTLY",
"NATURALLY",
"NERVOUSELY",
"OBEDIENTLY",
"OPENLY",
"PAINFULLY",
"PASSIONATELY",
"PATIENTLY",
"PERFECTLY",
"LOOSELY",
"PLAYFULLY",
"PRECISELY",
"QUIETLY",
"RAPIDLY",
"RELUCTANTLY",
"REPETITIVELY",
"SMOOTHLY",
"DARINGLY",
"RELENTLESSLY",
"TENDERLY",
"MYSTERIOUSLY"
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
