var hr, mn, s
var hrOx, mnOx, sOx

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(255, 255, 255);
  translate(200, 200)
  rotate(-90)  
  s = second()
sOx = map(s, 0, 60, 0, 360)
push()
rotate(sOx)
stroke("lime")
line(0, 0, 100, 0)
pop()
noFill()
arc(0, 0, 300, 300, 0, sOx)

mn = minute()
mnOx = map(mn, 0, 60, 0, 360)
push()
rotate(mnOx)
stroke("red")
line(0, 0, 75, 0)
pop()
noFill()
arc(0, 0, 280, 280, 0, mnOx)

hr = hour()
hrOx = map(hr, 0, 60, 0, 360)
push()
rotate(hrOx)
stroke("purple")
line(0, 0, 50, 0)
pop()
noFill()
arc(0, 0, 260, 260, 0, hrOx)

}
