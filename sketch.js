var capture;


function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  
}


function draw() {
  
  image(capture, 0, 0, 640, 480);
   loadPixels();

      for(i=0;i<pixels.length;i+=4){
        
            pixels[i]=325-pixels[i]
             pixels[i+1]=325-pixels[i+1]
             pixels[i+2]=325-pixels[i+2]
      }
      
  updatePixels();
  
}
