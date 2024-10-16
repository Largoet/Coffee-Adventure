const roomList = {
  toilet: {
    room: {
      toiletMain: {
        img : "../assets/images/jpg_files/toilet/room_toilette_entry-cofee_adventure.jpg",
        direction: ["down"],
        arrowDown: 'desktopMain'
      },
      toiletInside: {
        img : "../assets/images/jpg_files/toilet/room_toilette_inside-cofee_adventure.jpg",
        direction: ["down"],
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
        direction: ["up", "right", "down", "left"]
      }
    }
  }
}

const rooms = {
  toiletMain: roomList.toilet.room.toiletMain,
  toiletInside: roomList.toilet.room.toiletInside,
  toilet: roomList.toilet.room.toilet,
  desktopMain: roomList.desktop.room.desktopMain
}

let currentRoom = null;

export const room = {
  loadRoom: function(pRoom) {
    currentRoom = rooms[pRoom];
    console.log(roomList.toilet.room.toiletMain.arrowDown);
    return currentRoom.img;
  },

  loadArrows: function() {
    for (let n = 0; n <= currentRoom.direction.length; n++) {
      switch (currentRoom.direction[n]) {
        case "up":
          setArrows('.btn-top');
          break;

        case "right":
          setArrows('.btn-right');
          break;

        case "down":
          setArrows('.btn-bottom');
          break;

        case "left":
          setArrows('.btn-left');
          break;

        default:
          break;
      }
    }
  },

  keydown: function (event) {
    currentRoom = rooms[event];
    console.log(currentRoom);

    const loadRoom = document.querySelector('#currentRoom');
    loadRoom.setAttribute('src', room.loadRoom(rooms[event]));
    room.loadArrows();
  }
}

function setArrows(pClass) {
  const arrow = document.querySelector(pClass);
  return arrow.style.visibility = 'visible';
}