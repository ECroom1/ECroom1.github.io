$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform( 300,600 , 100, 100, "white")
createPlatform( 400, 500, 100, 100, "red" )
createPlatform(200, 400, 100, 100, "white")
createPlatform( 100, 300, 100, 100, "red")
createPlatform(400, 100, 100, 100, "white")
createPlatform(500,600, 100, 100, "red")
createPlatform(300,200, 100, 100, "white")
createPlatform(600, 300, 100, 100,"red")
createPlatform(600, 100, 200, 100, "white")
createPlatform(800, 400, 100, 100, "red")
createPlatform( 1000, 200, 100, 100, "white")
createPlatform(1100, 100, 100,100,"red")
createPlatform(900,300,100, 100,"white")
createPlatform(200,700, 100, 50, "red")
    // TODO 3 - Create Collectables
createCollectable("steve", 430, 450);
createCollectable("database",630, 250);
createCollectable("database", 1030, 150)

    
    // TODO 4 - Create Cannons 
createCannon("top", 200, 1300, 15, 100);
createCannon("left",500, 3000, 100, 100, 5)
createCannon("bottom",600, 1500, 100, 10, 10)   
createCannon("top",1000, 1600, 40, 30, 20)
createCannon("left",200, 3000, 100, 100, 5)

    // TODO 5 - Create Spikes
createSpike(100, 700, 100, 30, "white");
createSpike(500, 570, 100, 30, "white");

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
