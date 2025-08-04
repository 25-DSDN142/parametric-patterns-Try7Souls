let eyeX = 100;
let eyeY = 100;

let insaneX = eyeX;
let insaneY = eyeY;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  fill(255); // Eye
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(eyeX-50,eyeY);
  quadraticVertex(eyeX,eyeY-50,eyeX+50,eyeY);
  quadraticVertex(eyeX,eyeY+50,eyeX-50,eyeY);
  endShape();

//Sainty Eye Lines
stroke(150, 0, 200, 120);
strokeWeight(1);

line(insaneX, insaneY,insaneX,insaneY-50);
line(insaneX, insaneY,insaneX+35,insaneY-35);
line(insaneX, insaneY,insaneX+50,insaneY);
line(insaneX, insaneY,insaneX+35,insaneY+35);
line(insaneX, insaneY,insaneX,insaneY+50);
line(insaneX, insaneY,insaneX-35,insaneY+35);
line(insaneX, insaneY,insaneX-50,insaneY);
line(insaneX, insaneY,insaneX-35,insaneY-35);


// Pupil
fill(0);
ellipse(eyeX,eyeY,10,10);


}