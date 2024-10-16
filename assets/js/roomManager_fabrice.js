const teams = false;
const start = 'startMain';

const btnTop = document.getElementById('btnTop');
const btnRight = document.getElementById('btnRight');
const btnBottom = document.getElementById('btnBottom');
const btnLeft = document.getElementById('btnLeft');

let loadRoom = '';
let currentRoom = null;

if (teams) {
  loadRoom = document.querySelector('#currentRoom');
  let benjamin = document.getElementById('currentRoomTeams');
  benjamin.href = '../pages/desktop_fabrice.html';
} else {
  loadRoom = document.querySelector('#currentRoom');
}

const roomList = {
  toilet: {
    room: {
      toiletMain: {
        img : "../assets/images/jpg_files/toilet/room_toilette_entry-cofee_adventure.jpg",
        href : "../../pages/desktop_fabrice.html",
        direction: ["down", "up"],
        up:'toiletInside',
        down: 'desktopMain'
      },

      toiletInside: {
        img : "../assets/images/jpg_files/toilet/room_toilette_inside-cofee_adventure.jpg",
        direction: ["down"],
        down:'toiletMain'
        },

      toilet: {
        img : "../assets/images/jpg_files/toilet/room_toilette_toilet-cofee_adventure.jpg",
        direction: ["down"]
      }
    },
  },

  desktop: {
    room: {
      desktopMain: {
        img : "../assets/images/jpg_files/desktop/room_bureau-cofee_adventure.jpg",
        direction: ["up", "right", "down", "left"],
        up: ["toiletMain"],
        down: ["startMain"],
        right: ["outMain"],
        left: ["kitchenMain"]
      }
    }
  },

  out: {
    room: {
      outMain: {
        img : "../assets/images/jpg_files/out/room_out_01-cofee_adventure.jpg",
        direction: ["left"],
        left: ["desktopMain"]
      }
    }
  },

  start: {
    room: {
      startMain: {
        img : !teams ? "../assets/images/jpg_files/start/room_start-cofee_adventure.jpg" : "",
        direction: ["down"],
        down: ["desktopMain"]
      }
    }
  },

  kitchen: {
    room: {
      kitchenMain: {
        img : "../assets/images/jpg_files/kitchen/room_cuisine_04-cofee_adventure.jpg",
        direction: ["right"],
        right: ["desktopMain"]
      }
    }
  }
}

const rooms = {
  startMain: roomList.start.room.startMain,
  kitchenMain: roomList.kitchen.room.kitchenMain,
  desktopMain: roomList.desktop.room.desktopMain,
  toiletMain: roomList.toilet.room.toiletMain,
  toiletInside: roomList.toilet.room.toiletInside,
  toilet: roomList.toilet.room.toilet,
  outMain: roomList.out.room.outMain
}

export const room = {
  firstRoom: start,

  start: function(pRoom) {
    
    loadRoom.setAttribute('src', room.loadRoom(pRoom));

  },
  
  loadRoom: function(pRoom) {
    room.hideArrows();
    currentRoom = rooms[pRoom];
    room.loadArrows();

    return currentRoom.img;
  },

  loadArrows: function() {
    for (let n = 0; n <= currentRoom.direction.length; n++) {
      switch (currentRoom.direction[n]) {
        case "up":
          btnTop.style.visibility = 'visible';
          break;

        case "right":
          btnRight.style.visibility = 'visible';
          break;

        case "down":
          btnBottom.style.visibility = 'visible';
          break;

        case "left":
          btnLeft.style.visibility = 'visible';
          break;

        default:
          break;
      }
    }
  },

  hideArrows: function() {
    btnTop.style.visibility = 'hidden';
    btnRight.style.visibility = 'hidden';
    btnBottom.style.visibility = 'hidden';
    btnLeft.style.visibility = 'hidden';
  }
}

function setArrows(pClass) {
  const arrow = document.querySelector(pClass);
  return arrow.style.visibility = 'visible';
}

const up = document.querySelector('#btnTop');
up.addEventListener('click', () => {
  room.start(currentRoom.up);
})

const down = document.querySelector('#btnBottom');
down.addEventListener('click', () => {
  room.start(currentRoom.down);
})

const left = document.querySelector('#btnLeft');
left.addEventListener('click', () => {
  room.start(currentRoom.left);
})

const right = document.querySelector('#btnRight');
right.addEventListener('click', () => {
  room.start(currentRoom.right);
})