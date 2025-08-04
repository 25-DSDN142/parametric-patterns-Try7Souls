//your parameter variables go here!
//let mouseheadY = 80;
//let eyeSize = 10;


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
  

line(150,105)
//fill(255, 100, 0); // orange flame

//beginShape();                    // bottom right
//quadraticVertex(145,130,140,120);   // inner curve
//quadraticVertex(155,100,150,120);        // outer curve
//quadraticVertex(155,140,150,150);             // curve back to base
//endShape();

}



