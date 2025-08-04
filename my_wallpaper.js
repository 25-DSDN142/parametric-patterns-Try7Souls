let eyeX = 100; // change X value of eye
let eyeY = 100; // change Y value of 

let insaneX = eyeX;
let insaneY = eyeY;

let pupilSize = 10; // change size of the pupil in the middle
let flameColor = [130, 70, 180]; // change RGB color of flame marks
let showBlackLine = false; // toggle bracket lines on/off
let outerCircleSize = 160; // change diameter of big circle around the eye
let insaneLine = 250; // changes transparency of the purple lines
let bgColor = [40]; // change background color

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); // set this to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(bgColor); // dark gray background
}

function my_symbol() {
  // black background cross
  stroke(0); // black
  strokeWeight(1.5);
  line(0, 100, 200, 100);
  line(100, 0, 100, 200);

  // Eye shape
  fill(230); // light gray
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(eyeX - 50, eyeY);
  quadraticVertex(eyeX, eyeY - 50, eyeX + 50, eyeY);
  quadraticVertex(eyeX, eyeY + 50, eyeX - 50, eyeY);
  endShape();

  // Radiating lines
  stroke(120, 0, 180, insaneLine); // transparent purple
  strokeWeight(1);
  line(insaneX, insaneY, insaneX, insaneY - 50);
  line(insaneX, insaneY, insaneX + 35, insaneY - 35);
  line(insaneX, insaneY, insaneX + 50, insaneY);
  line(insaneX, insaneY, insaneX + 35, insaneY + 35);
  line(insaneX, insaneY, insaneX, insaneY + 50);
  line(insaneX, insaneY, insaneX - 35, insaneY + 35);
  line(insaneX, insaneY, insaneX - 50, insaneY);
  line(insaneX, insaneY, insaneX - 35, insaneY - 35);

  // Pupil
  fill(0); // black
  noStroke();
  ellipse(eyeX, eyeY, pupilSize, pupilSize);

  // Flame shapes (purple marks around eye)
  fill(flameColor); // using variable color
  noStroke();
  ellipse(100, 20, 10, 30);
  ellipse(100, 180, 10, 30);
  ellipse(20, 100, 30, 10);
  ellipse(180, 100, 30, 10);

  // Gray dots (decorative points)
  fill(120);
  ellipse(60, 60, 5, 5);
  ellipse(140, 60, 5, 5);
  ellipse(60, 140, 5, 5);
  ellipse(140, 140, 5, 5);

  // Outer circle around the whole shape
  noFill();
  stroke(90, 0, 130); // dark violet
  strokeWeight(2);
  ellipse(100, 100, outerCircleSize, outerCircleSize);

  // Small inner circle for extra detail
  noFill();
  stroke(180); // soft gray
  strokeWeight(1);
  ellipse(100, 100, 60); // smaller ring inside

  // Black "L" shaped brackets on all four sides if true
  if (showBlackLine) {
    stroke(0); // black
    strokeWeight(3);

    // Top
    line(100, 20, 120, 20);
    line(120, 20, 120, 0);
    line(100, 20, 80, 20);
    line(80, 20, 80, 0);

    // Bottom
    line(100, 180, 120, 180);
    line(120, 180, 120, 200);
    line(100, 180, 80, 180);
    line(80, 180, 80, 200);

    // Left
    line(20, 100, 20, 80);
    line(20, 80, 0, 80);
    line(20, 100, 20, 120);
    line(20, 120, 0, 120);

    // Right
    line(180, 100, 180, 80);
    line(180, 80, 200, 80);
    line(180, 100, 180, 120);
    line(180, 120, 200, 120);
  }
}