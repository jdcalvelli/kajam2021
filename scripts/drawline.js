//Bresenham's Line Algorithm for pathfinding
//see http://www.roguebasin.com/index.php?title=Bresenham%27s_Line_Algorithm

export default function drawline(x0,y0,x1,y1){
  var tmp;
  var steep = Math.abs(y1-y0) > Math.abs(x1-x0);
  if(steep){
    //swap x0,y0
    tmp=x0; x0=y0; y0=tmp;

    //swap x1,y1
    tmp=x1; x1=y1; y1=tmp;
  }

  var sign = 1;
  if(x0>x1){
    sign = -1;
    x0 *= -1;
    x1 *= -1;
  }
  var dx = x1-x0;
  var dy = Math.abs(y1-y0);
  var err = ((dx/2));
  var ystep = y0 < y1 ? 1:-1;
  var y = y0;

  for(var x=x0;x<=x1;x++){
    if(!(steep ? plot(y,sign*x) : plot(sign*x,y))) return;
    err = (err - dy);
    if(err < 0){
      y+=ystep;
      err+=dx;
    }
  }
}
