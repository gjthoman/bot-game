var levels = [
  {//0
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 2, 'y': 3},
    'direction': 0,
    'commands': ['forward_2'],
    'message': 'Drag the Available Command to the Command Sequence'
  },
  {//1
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 1, 'y': 3},
    'direction': 0,
    'commands': ['clockwise','forward_2','forward_1'],
    'message': 'Executing commands in the correct sequence will bring the robot to its goal'
  },
  {//2
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 2, 'y': 4},
    'direction': 0,
    'pits': [{ 'x': 2, 'y': 3}],
    'commands': ['forward_1','jump'],
    'message': 'Pits must be avoided or jumped over'
  },
  {//3
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 3, 'y': 4},
    'direction': 0,
    'walls': [{ 'x': 3, 'y': 3}],
    'commands': ['clockwise','counter_clockwise','forward_3','forward_1'],
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
    'commands': ['clockwise','counter_clockwise','forward_2','forward_1','jump']
  },
  {
    'grid': 5,
    'goal': { 'x': 2, 'y': 1},
    'robot': { 'x': 4, 'y': 4},
    'direction': 0,
    'pits': [{ 'x': 4, 'y': 3}],
    'walls': [{ 'x': 3, 'y': 3}],
    'commands': ['clockwise',
                  'counter_clockwise',
                  'forward_3',
                  'forward_2',
                  'forward_1',
                  'jump',
                  'turn_around'
                ]
  }
]