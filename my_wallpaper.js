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
  

 
//beginShape()
//vertex(175,25);
//bezierVertex(100, 80, 25, 25, 25, 25);
//endShape();


beginShape();
vertex(50,0);
quadraticVertex(50, 50, 0, 50);
vertex(0,0);
vertex(50,0)
endShape();

beginShape();
vertex(150,0);
quadraticVertex(150, 50, 200, 50);
vertex(200,0);
vertex(150,0);
endShape();

beginShape();
vertex(50,200);
quadraticVertex(50,150,0,150)
vertex(0,200)
vertex(50,200)
endShape()

beginShape();
vertex(200,150)
quadraticVertex(150,150,150,200)
vertex(200,200)
vertex(200,150)
endShape()


  
//ears and head
//fill(169,169,169)
//circle(50,mouseheadY,50)
//circle(150,mouseheadY,50)
//triangle(50,mouseheadY,150,mouseheadY,100,150)
//stroke(0)
//fill(255)
//strokeWeight(1.5)

//eyes
//ellipse(80,120,eyeSize+5,10)
//ellipse(120,120,eyeSize+5,10)
//strokeWeight(1)

//fill(0)
//iner eyes
//ellipse(80,120,eyeSize-2.5,10)
//ellipse(120,120,eyeSize-2.5,10)
//strokeWeight(0)

//nose
//ellipse(100,150,15)
//strokeWeight(1)

}
