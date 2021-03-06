let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 400;
ctx.translate(canvas.width / 2, canvas.height / 2);
var truck = Truck(Vector(canvas.width/2 - 115, 200), ctx);

function getTime () {
  let time = new Date().getHours();
  let mid = 'am';
  if (time > 16) {
    mid = 'pm';
  }
  return mid;
}

let leavesColor = (getTime() === 'am') ? '#329932' : '#019875';
let cloudColor = (getTime() === 'am')  ? '#ecf0f1' : '#7f8c8d';
let windowColor = (getTime() === 'am') ? '#add8e6' : 'rgba(241, 196, 15, 1)';
let canvasSky = (getTime() === 'am')   ? 'rgba(52, 152, 219, 0.8)' : 'rgba(44, 62, 80, 0.8)';

canvas.style.backgroundColor = canvasSky;

function draw () {
  let pool = [];
  let buildingX = 600;
  let buildingY = 10;
  let windowX   = 610;
  let windowY   = -175;
  let treePositionX = 50;
  let treeYone = 500;
  let treeYtwo = 300;
  let leaveY = 300;
  let cloudX = 0;
  let cloudY = 50;
  let animationId = 0;
  let iWindows = 1;
  let iClouds = 1;
  let iTrees = 1;
  let i = 1;

  while(i < 6) {
    let building = Rectangle(Vector(buildingX, buildingY), 150, 400, true, '#95a5a6', true, '#7f8c8d', 3, ctx, true);
    let door = Rectangle(Vector(buildingX + 58, 358), 30, 40, true, '#22313F', true, '#34495E', 2, ctx, true);

    buildingX = buildingX + 250;
    buildingY = buildingY + 30;
    building.update();
    pool.push(building);
    pool.push(door);

    i++;

    switch(i) {
      case 3:
      case 5:
        buildingY = buildingY - 50;
        break;
    }
  }

  while(iClouds < 20) {
    let cloud = Cloud(Vector(cloudX,cloudY), 20, cloudColor, true, ctx);
    cloudX = cloudX + 15;
    cloudY = cloudY;
    pool.push(cloud);
    iClouds++;

    if (iClouds === 8) {
      cloudX = 1900 + 15;
    }

    if (iClouds === 14) {
      cloudX = 360 + 15;
    }

    switch(iClouds) {
      case 2:
      case 4:
      case 6:
        cloudY = 50 - 10;
        break;
      case 3:
      case 5:
      case 7:
        cloudY = 50 + 20;
        break;
      case 8:
      case 10:
      case 12:
        cloudY = 50 - 10;
        break;
      case 9:
      case 11:
      case 13:
        cloudY = 50 + 20;
        break;
      case 14:
      case 16:
      case 18:
        cloudY = 50 - 10;
        break;
      case 15:
      case 17:
      case 19:
        cloudY = 50 + 20;
        break;
    }
  }

  while(iTrees < 9) {
    let tree = Tree(Vector(treePositionX, treeYone), Vector(treePositionX, treeYtwo), 15, 'square', '#614126', ctx, Vector(treePositionX, leaveY), 35, leavesColor, true);

    treePositionX = treePositionX + 100;

    tree.update();
    pool.push(tree);
    iTrees++;

    switch(iTrees) {
      case 2:
        treeYone = treeYone - 50;
        treeYtwo = treeYtwo - 50;
        leaveY = leaveY - 50;
        break;
      case 3:
        treeYone =  500;
        treeYtwo =  300;
        leaveY =  300;
        break;
      case 4:
        treePositionX = treePositionX + 420;
        treeYone = treeYone - 50;
        treeYtwo = treeYtwo - 50;
        leaveY = leaveY - 50;
        break;
      case 5:
       treePositionX  = treePositionX + 430;
       treeYone = treeYone - 50;
       treeYtwo = treeYtwo - 50;
       leaveY = leaveY - 50;
       break;
      case 6:
       treePositionX  = treePositionX + 430;
       treeYone =  500;
       treeYtwo =  300;
       leaveY =  300;
       break;
      case 7:
       treePositionX  = treePositionX + 390;
       treeYone = treeYone - 50;
       treeYtwo = treeYtwo - 50;
       leaveY = leaveY - 50;
       break;
      case 8:
       treePositionX  = treePositionX - 190;
       treeYone =  500;
       treeYtwo =  300;
       leaveY =  300;
       break;

    }
  }

  function update() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    pool.forEach(function (pool) {
        pool.update();
    }, this);
    truck.update();

    animationId = requestAnimationFrame(update);
  }

  update();

  while(iWindows < 292) {
    let window   = Rectangle(Vector(windowX + 5, windowY  + 200), 20, 20, true, windowColor, true, '#000', 2, ctx, true);
    windowX = windowX + 30;
    pool.push(window);
    iWindows++;

    switch(iWindows) {
      case 5:
      case 6:
      case 7:
      case 8:
        windowX = 610;
        windowY = -140;
        break;

      case 12:
      case 13:
      case 14:
      case 15:
        windowX = 610;
        windowY = -105;
        break;
      case 19:
      case 20:
      case 21:
      case 22:
        windowX = 610;
        windowY = -70;
        break;
      case 26:
      case 27:
      case 28:
      case 29:
        windowX = 610;
        windowY = -35;
        break;
      case 33:
      case 34:
      case 35:
      case 36:
        windowX = 610;
        windowY = 0;
        break;
      case 40:
      case 41:
      case 42:
      case 43:
        windowX = 610;
        windowY = 35;
        break;
      case 47:
      case 48:
      case 49:
      case 50:
        windowX = 610;
        windowY = 70;
        break;
      case 54:
      case 55:
      case 56:
      case 57:
        windowX = 610;
        windowY = 105;
        break;
      case 61:
      case 62:
      case 63:
      case 64:
        windowX = 858;
        windowY = -140;
        break;
      case 68:
      case 69:
      case 70:
      case 71:
        windowX = 858;
        windowY = -105;
        break;
      case 75:
      case 76:
      case 77:
      case 78:
        windowX = 858;
        windowY = -70;
        break;
      case 82:
      case 83:
      case 84:
      case 85:
        windowX = 858;
        windowY = -35;
        break;
      case 89:
      case 90:
      case 91:
      case 92:
        windowX = 858;
        windowY = 0;
        break;
      case 96:
      case 97:
      case 98:
      case 99:
        windowX = 858;
        windowY = 35;
        break;
      case 103:
      case 104:
      case 105:
      case 106:
        windowX = 858;
        windowY = 70;
        break;
      case 110:
      case 111:
      case 112:
      case 113:
        windowX = 858;
        windowY = 105;
        break;
      case 117:
      case 118:
      case 119:
      case 120:
        windowX = 1109;
        windowY = -165;
        break;
      case 124:
      case 125:
      case 126:
      case 127:
        windowX = 1109;
        windowY = -130;
        break;
      case 131:
      case 132:
      case 133:
      case 134:
        windowX = 1109;
        windowY = -95;
        break;
      case 138:
      case 139:
      case 140:
      case 141:
        windowX = 1109;
        windowY = -60;
        break;
      case 145:
      case 146:
      case 147:
      case 148:
        windowX = 1109;
        windowY = -25;
        break;
      case 152:
      case 153:
      case 154:
      case 155:
        windowX = 1109;
        windowY = 10;
        break;
      case 159:
      case 160:
      case 161:
      case 162:
        windowX = 1109;
        windowY = 45;
        break;
      case 166:
      case 167:
      case 168:
      case 169:
        windowX = 1109;
        windowY = 80;
        break;
      case 173:
      case 174:
      case 175:
      case 176:
        windowX = 1109;
        windowY = 115;
        break;
      case 180:
      case 181:
      case 182:
      case 183:
        windowX = 1360;
        windowY = -135;
        break;
      case 187:
      case 188:
      case 189:
      case 190:
        windowX = 1360;
        windowY = -100;
        break;
      case 194:
      case 195:
      case 196:
      case 197:
        windowX = 1360;
        windowY = -65;
        break;
      case 201:
      case 202:
      case 203:
      case 204:
        windowX = 1360;
        windowY = -30;
        break;
      case 208:
      case 209:
      case 210:
      case 211:
        windowX = 1360;
        windowY = 5;
        break;
      case 215:
      case 216:
      case 217:
      case 218:
        windowX = 1360;
        windowY = 40;
        break;
      case 222:
      case 223:
      case 224:
      case 225:
        windowX = 1360;
        windowY = 75;
        break
      case 229:
      case 230:
      case 231:
      case 232:
        windowX = 1360;
        windowY = 110;
        break
      case 236:
      case 237:
      case 238:
      case 239:
        windowX = 1610;
        windowY = -155;
        break
      case 243:
      case 244:
      case 245:
      case 246:
        windowX = 1610;
        windowY = -120;
        break
      case 250:
      case 251:
      case 252:
      case 253:
        windowX = 1610;
        windowY = -85;
        break;
      case 257:
      case 258:
      case 259:
      case 260:
        windowX = 1610;
        windowY = -50;
        break;
      case 264:
      case 265:
      case 266:
      case 267:
        windowX = 1610;
        windowY = -15;
        break;
      case 271:
      case 272:
      case 273:
      case 274:
        windowX = 1610;
        windowY = 20;
        break;
      case 278:
      case 279:
      case 280:
      case 281:
        windowX = 1610;
        windowY = 55;
        break;
      case 285:
      case 286:
      case 287:
      case 288:
        windowX = 1610;
        windowY = 90;
        break;
    }

  }
}

window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('orientationchange', resizeCanvas, false);
  resizeCanvas();
  function resizeCanvas() {
    truck.position.x = canvas.width / 2 - 115;
    truck.wheell.position.x = truck.position.x + 60;
    canvas.width = window.innerWidth;
    canvas.height = 400;
  }


window.addEventListener('load', draw(), false);
