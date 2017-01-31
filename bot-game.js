$("#Commands, #CommandSequence").sortable({
  connectWith: ['.connectedSortable']
});

var $grid = $('#Room');
var $commandSequence = $('#CommandSequence');
var numCommands;
var currentCommand = 0;
var currentLevel = 4;
var animationSpeed = 1000;

var Robot = {
  'ref': $('#Robot'),
  'direction': 0
}

init = function(){
  setupListeners();
  setupLevel(levels[currentLevel]);
}

destroyLevel = function() {
  bot = $('#Robot').detach();
  $('tr').remove();
  $('#Commands').children().remove();
  $commandSequence.children().remove();
}

setupLevel = function(level) {
  $('h1 span').html(currentLevel + 1);
  setupGrid(level.grid);
  placeGoal(level.goal.x, level.goal.y);
  placeRobot(level.robot.x, level.robot.y);
  rotateTo(level.direction);
  placePits(level.pits);
  placeWalls(level.walls);
  setMessage(level.message);
  setupCommands(level.commands);
}

setMessage = function(msg) {
  console.log(msg);
  if(msg == undefined) {
    msg = '';
  }
  $('#messages').html(msg);
}

placeWalls = function(walls) {
  $.each(walls, function(key, wall){
    var $row = $grid.children().eq(wall.y);
    var $cell = $row.children().eq(wall.x);

    $cell.addClass('wall'); 
  });
}

placePits = function(pits) {
  $.each(pits, function(key, pit){
    var $row = $grid.children().eq(pit.y);
    var $cell = $row.children().eq(pit.x);

    $cell.addClass('pit'); 
  });
}

setupCommands = function(commands) {
  $.each(commands, function(key, command){
    var bc = BotCommands[command];
    $('#Commands').append($('<li class="list-group-item" data-command="' + bc.data + '">' + bc.code + (bc.label ? bc.label : '')  + '</li>'));
  });
}

setupListeners = function() {
  $('button.execute').on('click', function(){
    if ($commandSequence.children().length > 0) {
      numCommands = $commandSequence.children().length
      runCommandSequence();
    }
  });

  $('button.reset').on('click', function(){
    var level = levels[currentLevel];
    moveBotTo(level.robot.x, level.robot.y);
    rotateTo(level.direction);
  });

  $('button.prev').on('click', function() {
    currentLevel --;
    destroyLevel();
    setupLevel(levels[currentLevel]);
  });
  $('button.next').on('click', function() {
    currentLevel ++;
    destroyLevel();
    setupLevel(levels[currentLevel]);
  });
}

moveBotTo = function(x, y) {
  var $row = $grid.children().eq(y);
  var $cell = $row.children().eq(x);
  var bot = $('#Robot').detach();
  
  $cell.append(bot);
}

runCommandSequence = function() {
  executeCommand($commandSequence.children().eq(currentCommand).data('command'));
  currentCommand ++;
}

executeCommand = function(command) {
  console.log(command);
  var comm = command.split('|')[0];
  var num = command.split('|')[1];

  switch(comm) {
    case "forward":
      console.log(comm);
      var count = parseInt(num);
      for(var c = 0; c < count; c++) {
        setTimeout(function(){
          forward(parseInt(num));
        }, animationSpeed/(count+1)*c);
      }
    break;
    case "rotate":
      rotate(parseInt(num));
    break;
    case "jump":
      jump();
    break;
  }

  setTimeout(function(){
    if(currentCommand < numCommands){
      console.log('next command');
      runCommandSequence();
    } else {
      currentCommand = 0;
      checkGoal();
    }
  }, animationSpeed);
}

checkGoal = function() {
  var $goal = $('.goal');

  setTimeout(function(){

    if($('#Robot').parent().hasClass('goal')) {
      var txt;
      var r = confirm("You did it!");
      if (r == true) {
        currentLevel ++;
        destroyLevel();
        setupLevel(levels[currentLevel]);
      }
    }
  }, 300);
}

forward = function(cells) {
  console.log('forward func');
  var nextCell = getNextCell(1);
  if($('#Robot').parent().hasClass('pit')){
    console.log('stuck'); 
  } else {
    switch(checkCell(nextCell)){
      case "pit":
        moveRobot(nextCell.cell, nextCell.row);
      break;
      case "wall":
        console.log('bump');
      break;
      default:
        console.log('default');
        moveRobot(nextCell.cell, nextCell.row);
    }
  }
}

checkCell = function(cell){
  var next = 'empty';
  var $row = $grid.children().eq(cell.row);
  var $cell = $row.children().eq(cell.cell);

  if($cell.hasClass('wall')){
    next = 'wall'
  }

  return next;
}

getNextCell = function(cellsAhead){
  var cell = $('#Robot').parent().index();
  var row = $('#Robot').parent().parent().index();

  switch(Robot.direction){
    case 0://up
      row -= cellsAhead;
    break;
    case 2://down
      row += cellsAhead;
    break;
    case 3://left
      cell -= cellsAhead;
    break;
    case 1://right
      cell += cellsAhead;
    break;
  }

  return {cell, row}
}

jump = function(){
  var nextCell = getNextCell(2);

  if($('#Robot').parent().hasClass('pit')){
    console.log('stuck'); 
  } else {
    if(checkCell(getNextCell(1)) == 'wall'){
      console.log('bump');
    } else if (checkCell(nextCell) == 'wall') {
      var wallCell = getNextCell(1);
      moveRobot(wallCell.cell, wallCell.row);
    } else {
      moveRobot(nextCell.cell, nextCell.row);    
    }
  }
}

rotate = function(amount) {
  amount = parseInt(amount);
  Robot.direction += amount;

  if(Robot.direction < 0) {
    Robot.direction += 4;
  } 

  if(Robot.direction > 3) {
    Robot.direction -= 4;
  }

  setRotationTransform(Robot.direction);
  //$('#Robot').css('transform', 'translate(-50%, -50%) rotate('+ Robot.direction * 90 +'deg)');
}
rotateTo = function(direction) {
  Robot.direction = direction;
  setRotationTransform(Robot.direction);
  //$('#Robot').css('transform', 'translate(-50%, -50%) rotate('+ Robot.direction * 90 +'deg)');
}

setRotationTransform = function(direction) {
  $('#Robot').css('transform', 'translate(-50%, -50%) rotate('+ Robot.direction * 90 +'deg)');
}

moveRobot = function(x, y) {
  console.log('move');
  var $row = $grid.children().eq(y);
  var $cell = $row.children().eq(x);
  var bot = $('#Robot').detach();

  $cell.append(bot);
}

placeRobot = function(x, y) {
  var $row = $grid.children().eq(y);
  var $cell = $row.children().eq(x);
  var bot = $('<div id="Robot"></div>');

  $cell.append(bot);
}

placeGoal = function(x, y) {
  var $row = $grid.children().eq(y);
  var $cell = $row.children().eq(x);

  $cell.addClass('goal'); 
}

setupGrid = function(num){
  for(var r = 0; r < num; r++) {
    var $row = $('<tr></tr>');

    for(var c = 0; c < num; c++) {
      $row.append($('<td></td>'));
    }

    $grid.append($row);
  }
}

init();
