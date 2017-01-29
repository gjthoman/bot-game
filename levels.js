var levels = [
  {//0
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 2, 'y': 3},
    'direction': 0,
    'commands': [
      {
        'data': 'forward|2',
        'label': 'Forward 2'
      }
    ],
    'message': 'Drag the Available Command to the Command Sequence'
  },
  {//1
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 1, 'y': 3},
    'direction': 0,
    'commands': [
      { 
        'data': 'forward|1',
        'label': 'Forward 1'
      },{
        'data': 'forward|2',
        'label': 'Forward 2'
      },{
        'data': 'rotate|1',
        'label': 'Rotate Clockwise'
      }
    ],
    'message': 'Executing commands in the correct sequence will bring the robot to its goal'
  },
  {//2
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 2, 'y': 4},
    'direction': 0,
    'pits': [{ 'x': 2, 'y': 3}],
    'commands': [
      { 
        'data': 'forward|1',
        'label': 'Forward 1'
      },{
        'data': 'jump',
        'label': 'Jump'
      }
    ],
    'message': 'Pits must be avoided or jumped over'
  },
  {//3
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 3, 'y': 4},
    'direction': 0,
    'walls': [{ 'x': 3, 'y': 3}],
    'commands': [
      { 
        'data': 'forward|1',
        'label': 'Forward 1'
      },{
        'data': 'forward|3',
        'label': 'Forward 3'
      },{
        'data': 'rotate|1',
        'label': 'Rotate Clockwise'
      },{
        'data': 'rotate|-1',
        'label': 'Rotate Counter Clockwise'
      }
    ],
    'message': 'Walls must be circumvented'
  },
  {//4
    'grid': 5,
    'goal': { 'x': 3, 'y': 1},
    'robot': { 'x': 1, 'y': 4},
    'direction': 0,
    'pits': [{ 'x': 3, 'y': 2}],
    'walls': [{ 'x': 2, 'y': 1},
              { 'x': 2, 'y': 2},
              { 'x': 2, 'y': 3}],
    'commands': [
      { 
        'data': 'forward|1',
        'label': 'Forward 1'
      },{
        'data': 'forward|2',
        'label': 'Forward 2'
      },{
        'data': 'rotate|1',
        'label': 'Rotate Clockwise'
      },{
        'data': 'rotate|-1',
        'label': 'Rotate Counter Clockwise'
      },{
        'data': 'jump',
        'label': 'Jump'
      }
    ]
  },
  {
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 4, 'y': 4},
    'direction': 0,
    'pits': [{ 'x': 4, 'y': 3}],
    'walls': [{ 'x': 3, 'y': 3}],
    'commands': [
      { 
        'data': 'forward|1',
        'label': 'Forward 1'
      },{
        'data': 'forward|2',
        'label': 'Forward 2'
      },{
        'data': 'forward|3',
        'label': 'Forward 3'
      },{
        'data': 'rotate|1',
        'label': 'Rotate Clockwise'
      },{
        'data': 'rotate|-1',
        'label': 'Rotate Counter Clockwise'
      },{
        'data': 'rotate|2',
        'label': 'Turn Around'
      },{
        'data': 'jump',
        'label': 'Jump'
      }
    ]
  }
]