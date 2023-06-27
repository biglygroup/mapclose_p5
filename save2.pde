PShape mainmap;
PShape leftbutton;
PShape rightbutton;
int day = 1;

void settings() { // credit great24 thanks
  size(displayWidth/2, displayHeight/2);
}
void setup() {
  mainmap = loadShape("1.svg"); 
  surface.setResizable(true); // credit great24
}

void draw() {
  background(0);
  mainmap = loadShape("maps/"+str(day)+".svg"); // thanks anova for join help // also credit to online p5 documentation & google https://processing.org/reference/strconvert_.html
  translate(width, height); // credit to local 2.2.1 documentation
  shape (mainmap, 0, 0);
}
