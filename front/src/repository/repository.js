// FIXME - IMPROOVE

// export const fetchData = async () => {
//   const response = await fetch('http://localhost:3000/board')
//   const data = await response.json()

//   return data
// }

// export const fetchData = async () => {
//   const response = await fetch('http://localhost:3000/mock')
//   const data = await response.json()

//   return data
// }

export const fetchData = () =>
  new Promise((resolver) =>
    resolver({
      board: {
        tiles: [
          {
            position: 0,
            resource: 'brick',
            number: '11',
            value: 2,
          },
          {
            position: 1,
            resource: 'brick',
            number: '4',
            value: 3,
          },
          {
            position: 2,
            resource: 'lumber',
            number: '8',
            value: 5,
          },
          {
            position: 3,
            resource: 'ore',
            number: '12',
            value: 1,
          },
          {
            position: 4,
            resource: 'brick',
            number: '6',
            value: 5,
          },
          {
            position: 5,
            resource: 'lumber',
            number: '3',
            value: 2,
          },
          {
            position: 6,
            resource: 'wool',
            number: '10',
            value: 3,
          },
          {
            position: 7,
            resource: 'lumber',
            number: '9',
            value: 4,
          },
          {
            position: 8,
            resource: 'ore',
            number: '5',
            value: 4,
          },
          {
            position: 9,
            resource: 'grain',
            number: '11',
            value: 2,
          },
          {
            position: 10,
            resource: 'desert',
            number: '7',
            value: 0,
          },
          {
            position: 11,
            resource: 'wool',
            number: '5',
            value: 4,
          },
          {
            position: 12,
            resource: 'lumber',
            number: '10',
            value: 3,
          },
          {
            position: 13,
            resource: 'grain',
            number: '4',
            value: 3,
          },
          {
            position: 14,
            resource: 'grain',
            number: '9',
            value: 4,
          },
          {
            position: 15,
            resource: 'grain',
            number: '2',
            value: 1,
          },
          {
            position: 16,
            resource: 'wool',
            number: '8',
            value: 5,
          },
          {
            position: 17,
            resource: 'wool',
            number: '3',
            value: 2,
          },
          {
            position: 18,
            resource: 'ore',
            number: '6',
            value: 5,
          },
        ],
        vertices: [
          {
            position: 0,
            tiles: [
              {
                position: 0,
                resource: 'brick',
                number: '11',
                value: 2,
              },
            ],
            value: 2,
          },
          {
            position: 1,
            owner: 'black',
            building: 'settlement',
            tiles: [
              {
                position: 1,
                resource: 'brick',
                number: '4',
                value: 3,
              },
            ],
            value: 3,
          },
          {
            position: 2,
            owner: 'green',
            building: 'settlement',
            tiles: [
              {
                position: 2,
                resource: 'lumber',
                number: '8',
                value: 5,
              },
            ],
            value: 5,
          },
          {
            position: 3,
            tiles: [
              {
                position: 0,
                resource: 'brick',
                number: '11',
                value: 2,
              },
            ],
            value: 2,
          },
          {
            position: 4,
            tiles: [
              {
                position: 0,
                resource: 'brick',
                number: '11',
                value: 2,
              },
              {
                position: 1,
                resource: 'brick',
                number: '4',
                value: 3,
              },
            ],
            value: 5,
          },
          {
            position: 5,
            tiles: [
              {
                position: 1,
                resource: 'brick',
                number: '4',
                value: 3,
              },
              {
                position: 2,
                resource: 'lumber',
                number: '8',
                value: 5,
              },
            ],
            value: 8,
          },
          {
            position: 6,
            tiles: [
              {
                position: 2,
                resource: 'lumber',
                number: '8',
                value: 5,
              },
            ],
            value: 5,
          },
          {
            position: 7,
            owner: 'blue',
            building: 'settlement',
            tiles: [
              {
                position: 0,
                resource: 'brick',
                number: '11',
                value: 2,
              },
              {
                position: 3,
                resource: 'ore',
                number: '12',
                value: 1,
              },
            ],
            value: 3,
          },
          {
            position: 8,
            owner: 'black',
            building: 'settlement',
            tiles: [
              {
                position: 0,
                resource: 'brick',
                number: '11',
                value: 2,
              },
              {
                position: 1,
                resource: 'brick',
                number: '4',
                value: 3,
              },
              {
                position: 4,
                resource: 'brick',
                number: '6',
                value: 5,
              },
            ],
            value: 10,
          },
          {
            position: 9,
            owner: 'green',
            building: 'city',
            tiles: [
              {
                position: 1,
                resource: 'brick',
                number: '4',
                value: 3,
              },
              {
                position: 2,
                resource: 'lumber',
                number: '8',
                value: 5,
              },
              {
                position: 5,
                resource: 'lumber',
                number: '3',
                value: 2,
              },
            ],
            value: 10,
          },
          {
            position: 10,
            owner: 'black',
            building: 'settlement',
            tiles: [
              {
                position: 2,
                resource: 'lumber',
                number: '8',
                value: 5,
              },
              {
                position: 6,
                resource: 'wool',
                number: '10',
                value: 3,
              },
            ],
            value: 8,
          },
          {
            position: 11,
            tiles: [
              {
                position: 3,
                resource: 'ore',
                number: '12',
                value: 1,
              },
            ],
            value: 1,
          },
          {
            position: 12,
            tiles: [
              {
                position: 0,
                resource: 'brick',
                number: '11',
                value: 2,
              },
              {
                position: 3,
                resource: 'ore',
                number: '12',
                value: 1,
              },
              {
                position: 4,
                resource: 'brick',
                number: '6',
                value: 5,
              },
            ],
            value: 8,
          },
          {
            position: 13,
            tiles: [
              {
                position: 1,
                resource: 'brick',
                number: '4',
                value: 3,
              },
              {
                position: 4,
                resource: 'brick',
                number: '6',
                value: 5,
              },
              {
                position: 5,
                resource: 'lumber',
                number: '3',
                value: 2,
              },
            ],
            value: 10,
          },
          {
            position: 14,
            tiles: [
              {
                position: 2,
                resource: 'lumber',
                number: '8',
                value: 5,
              },
              {
                position: 5,
                resource: 'lumber',
                number: '3',
                value: 2,
              },
              {
                position: 6,
                resource: 'wool',
                number: '10',
                value: 3,
              },
            ],
            value: 10,
          },
          {
            position: 15,
            tiles: [
              {
                position: 6,
                resource: 'wool',
                number: '10',
                value: 3,
              },
            ],
            value: 3,
          },
          {
            position: 16,
            tiles: [
              {
                position: 3,
                resource: 'ore',
                number: '12',
                value: 1,
              },
              {
                position: 7,
                resource: 'lumber',
                number: '9',
                value: 4,
              },
            ],
            value: 5,
          },
          {
            position: 17,
            tiles: [
              {
                position: 3,
                resource: 'ore',
                number: '12',
                value: 1,
              },
              {
                position: 4,
                resource: 'brick',
                number: '6',
                value: 5,
              },
              {
                position: 8,
                resource: 'ore',
                number: '5',
                value: 4,
              },
            ],
            value: 10,
          },
          {
            position: 18,
            tiles: [
              {
                position: 4,
                resource: 'brick',
                number: '6',
                value: 5,
              },
              {
                position: 5,
                resource: 'lumber',
                number: '3',
                value: 2,
              },
              {
                position: 9,
                resource: 'grain',
                number: '11',
                value: 2,
              },
            ],
            value: 9,
          },
          {
            position: 19,
            owner: 'green',
            building: 'settlement',
            tiles: [
              {
                position: 5,
                resource: 'lumber',
                number: '3',
                value: 2,
              },
              {
                position: 6,
                resource: 'wool',
                number: '10',
                value: 3,
              },
              {
                position: 10,
                resource: 'desert',
                number: '7',
                value: 0,
              },
            ],
            value: 5,
          },
          {
            position: 20,
            owner: 'black',
            building: 'settlement',
            tiles: [
              {
                position: 6,
                resource: 'wool',
                number: '10',
                value: 3,
              },
              {
                position: 11,
                resource: 'wool',
                number: '5',
                value: 4,
              },
            ],
            value: 7,
          },
          {
            position: 21,
            owner: 'red',
            building: 'settlement',
            tiles: [
              {
                position: 7,
                resource: 'lumber',
                number: '9',
                value: 4,
              },
            ],
            value: 4,
          },
          {
            position: 22,
            owner: 'red',
            building: 'city',
            tiles: [
              {
                position: 3,
                resource: 'ore',
                number: '12',
                value: 1,
              },
              {
                position: 7,
                resource: 'lumber',
                number: '9',
                value: 4,
              },
              {
                position: 8,
                resource: 'ore',
                number: '5',
                value: 4,
              },
            ],
            value: 9,
          },
          {
            position: 23,
            owner: 'blue',
            building: 'city',
            tiles: [
              {
                position: 4,
                resource: 'brick',
                number: '6',
                value: 5,
              },
              {
                position: 8,
                resource: 'ore',
                number: '5',
                value: 4,
              },
              {
                position: 9,
                resource: 'grain',
                number: '11',
                value: 2,
              },
            ],
            value: 11,
          },
          {
            position: 24,
            tiles: [
              {
                position: 5,
                resource: 'lumber',
                number: '3',
                value: 2,
              },
              {
                position: 9,
                resource: 'grain',
                number: '11',
                value: 2,
              },
              {
                position: 10,
                resource: 'desert',
                number: '7',
                value: 0,
              },
            ],
            value: 4,
          },
          {
            position: 25,
            tiles: [
              {
                position: 6,
                resource: 'wool',
                number: '10',
                value: 3,
              },
              {
                position: 10,
                resource: 'desert',
                number: '7',
                value: 0,
              },
              {
                position: 11,
                resource: 'wool',
                number: '5',
                value: 4,
              },
            ],
            value: 7,
          },
          {
            position: 26,
            tiles: [
              {
                position: 11,
                resource: 'wool',
                number: '5',
                value: 4,
              },
            ],
            value: 4,
          },
          {
            position: 27,
            tiles: [
              {
                position: 7,
                resource: 'lumber',
                number: '9',
                value: 4,
              },
            ],
            value: 4,
          },
          {
            position: 28,
            tiles: [
              {
                position: 7,
                resource: 'lumber',
                number: '9',
                value: 4,
              },
              {
                position: 8,
                resource: 'ore',
                number: '5',
                value: 4,
              },
              {
                position: 12,
                resource: 'lumber',
                number: '10',
                value: 3,
              },
            ],
            value: 11,
          },
          {
            position: 29,
            tiles: [
              {
                position: 8,
                resource: 'ore',
                number: '5',
                value: 4,
              },
              {
                position: 9,
                resource: 'grain',
                number: '11',
                value: 2,
              },
              {
                position: 13,
                resource: 'grain',
                number: '4',
                value: 3,
              },
            ],
            value: 9,
          },
          {
            position: 30,
            tiles: [
              {
                position: 9,
                resource: 'grain',
                number: '11',
                value: 2,
              },
              {
                position: 10,
                resource: 'desert',
                number: '7',
                value: 0,
              },
              {
                position: 14,
                resource: 'grain',
                number: '9',
                value: 4,
              },
            ],
            value: 6,
          },
          {
            position: 31,
            tiles: [
              {
                position: 10,
                resource: 'desert',
                number: '7',
                value: 0,
              },
              {
                position: 11,
                resource: 'wool',
                number: '5',
                value: 4,
              },
              {
                position: 15,
                resource: 'grain',
                number: '2',
                value: 1,
              },
            ],
            value: 5,
          },
          {
            position: 32,
            owner: 'black',
            building: 'settlement',
            tiles: [
              {
                position: 11,
                resource: 'wool',
                number: '5',
                value: 4,
              },
            ],
            value: 4,
          },
          {
            position: 33,
            owner: 'blue',
            building: 'city',
            tiles: [
              {
                position: 7,
                resource: 'lumber',
                number: '9',
                value: 4,
              },
              {
                position: 12,
                resource: 'lumber',
                number: '10',
                value: 3,
              },
            ],
            value: 7,
          },
          {
            position: 34,
            tiles: [
              {
                position: 8,
                resource: 'ore',
                number: '5',
                value: 4,
              },
              {
                position: 12,
                resource: 'lumber',
                number: '10',
                value: 3,
              },
              {
                position: 13,
                resource: 'grain',
                number: '4',
                value: 3,
              },
            ],
            value: 10,
          },
          {
            position: 35,
            owner: 'black',
            building: 'city',
            tiles: [
              {
                position: 9,
                resource: 'grain',
                number: '11',
                value: 2,
              },
              {
                position: 13,
                resource: 'grain',
                number: '4',
                value: 3,
              },
              {
                position: 14,
                resource: 'grain',
                number: '9',
                value: 4,
              },
            ],
            value: 9,
          },
          {
            position: 36,
            owner: 'green',
            building: 'settlement',
            tiles: [
              {
                position: 10,
                resource: 'desert',
                number: '7',
                value: 0,
              },
              {
                position: 14,
                resource: 'grain',
                number: '9',
                value: 4,
              },
              {
                position: 15,
                resource: 'grain',
                number: '2',
                value: 1,
              },
            ],
            value: 5,
          },
          {
            position: 37,
            tiles: [
              {
                position: 11,
                resource: 'wool',
                number: '5',
                value: 4,
              },
              {
                position: 15,
                resource: 'grain',
                number: '2',
                value: 1,
              },
            ],
            value: 5,
          },
          {
            position: 38,
            tiles: [
              {
                position: 12,
                resource: 'lumber',
                number: '10',
                value: 3,
              },
            ],
            value: 3,
          },
          {
            position: 39,
            owner: 'blue',
            building: 'city',
            tiles: [
              {
                position: 12,
                resource: 'lumber',
                number: '10',
                value: 3,
              },
              {
                position: 13,
                resource: 'grain',
                number: '4',
                value: 3,
              },
              {
                position: 16,
                resource: 'wool',
                number: '8',
                value: 5,
              },
            ],
            value: 11,
          },
          {
            position: 40,
            tiles: [
              {
                position: 13,
                resource: 'grain',
                number: '4',
                value: 3,
              },
              {
                position: 14,
                resource: 'grain',
                number: '9',
                value: 4,
              },
              {
                position: 17,
                resource: 'wool',
                number: '3',
                value: 2,
              },
            ],
            value: 9,
          },
          {
            position: 41,
            tiles: [
              {
                position: 14,
                resource: 'grain',
                number: '9',
                value: 4,
              },
              {
                position: 15,
                resource: 'grain',
                number: '2',
                value: 1,
              },
              {
                position: 18,
                resource: 'ore',
                number: '6',
                value: 5,
              },
            ],
            value: 10,
          },
          {
            position: 42,
            tiles: [
              {
                position: 15,
                resource: 'grain',
                number: '2',
                value: 1,
              },
            ],
            value: 1,
          },
          {
            position: 43,
            tiles: [
              {
                position: 12,
                resource: 'lumber',
                number: '10',
                value: 3,
              },
              {
                position: 16,
                resource: 'wool',
                number: '8',
                value: 5,
              },
            ],
            value: 8,
          },
          {
            position: 44,
            tiles: [
              {
                position: 13,
                resource: 'grain',
                number: '4',
                value: 3,
              },
              {
                position: 16,
                resource: 'wool',
                number: '8',
                value: 5,
              },
              {
                position: 17,
                resource: 'wool',
                number: '3',
                value: 2,
              },
            ],
            value: 10,
          },
          {
            position: 45,
            owner: 'red',
            building: 'city',
            tiles: [
              {
                position: 14,
                resource: 'grain',
                number: '9',
                value: 4,
              },
              {
                position: 17,
                resource: 'wool',
                number: '3',
                value: 2,
              },
              {
                position: 18,
                resource: 'ore',
                number: '6',
                value: 5,
              },
            ],
            value: 11,
          },
          {
            position: 46,
            owner: 'green',
            building: 'city',
            tiles: [
              {
                position: 15,
                resource: 'grain',
                number: '2',
                value: 1,
              },
              {
                position: 18,
                resource: 'ore',
                number: '6',
                value: 5,
              },
            ],
            value: 6,
          },
          {
            position: 47,
            tiles: [
              {
                position: 16,
                resource: 'wool',
                number: '8',
                value: 5,
              },
            ],
            value: 5,
          },
          {
            position: 48,
            tiles: [
              {
                position: 16,
                resource: 'wool',
                number: '8',
                value: 5,
              },
              {
                position: 17,
                resource: 'wool',
                number: '3',
                value: 2,
              },
            ],
            value: 7,
          },
          {
            position: 49,
            tiles: [
              {
                position: 17,
                resource: 'wool',
                number: '3',
                value: 2,
              },
              {
                position: 18,
                resource: 'ore',
                number: '6',
                value: 5,
              },
            ],
            value: 7,
          },
          {
            position: 50,
            tiles: [
              {
                position: 18,
                resource: 'ore',
                number: '6',
                value: 5,
              },
            ],
            value: 5,
          },
          {
            position: 51,
            owner: 'blue',
            building: 'city',
            tiles: [
              {
                position: 16,
                resource: 'wool',
                number: '8',
                value: 5,
              },
            ],
            value: 5,
          },
          {
            position: 52,
            owner: 'red',
            building: 'city',
            tiles: [
              {
                position: 17,
                resource: 'wool',
                number: '3',
                value: 2,
              },
            ],
            value: 2,
          },
          {
            position: 53,
            owner: 'green',
            building: 'settlement',
            tiles: [
              {
                position: 18,
                resource: 'ore',
                number: '6',
                value: 5,
              },
            ],
            value: 5,
          },
        ],
      },
      playerData: {
        black: {
          resources: {
            production: 41,
            brick: {
              production: 13,
              tiles: 4,
              numbers: ['4', '6', '11'],
            },
            lumber: {
              production: 5,
              tiles: 1,
              numbers: ['8'],
            },
            wool: {
              production: 14,
              tiles: 4,
              numbers: ['5', '10'],
            },
            grain: {
              production: 9,
              tiles: 3,
              numbers: ['4', '9', '11'],
            },
          },
          buildings: {
            city: 1,
            settlement: 5,
          },
          numbers: ['4', '5', '6', '8', '9', '10', '11'],
        },
        green: {
          resources: {
            production: 36,
            lumber: {
              production: 14,
              tiles: 4,
              numbers: ['3', '8'],
            },
            brick: {
              production: 3,
              tiles: 1,
              numbers: ['4'],
            },
            wool: {
              production: 3,
              tiles: 1,
              numbers: ['10'],
            },
            desert: {
              production: 0,
              tiles: 2,
              numbers: ['7'],
            },
            grain: {
              production: 6,
              tiles: 3,
              numbers: ['2', '9'],
            },
            ore: {
              production: 10,
              tiles: 2,
              numbers: ['6'],
            },
          },
          buildings: {
            city: 2,
            settlement: 4,
          },
          numbers: ['2', '3', '4', '6', '7', '8', '9', '10'],
        },
        blue: {
          resources: {
            production: 37,
            brick: {
              production: 7,
              tiles: 2,
              numbers: ['6', '11'],
            },
            ore: {
              production: 5,
              tiles: 2,
              numbers: ['5', '12'],
            },
            grain: {
              production: 5,
              tiles: 2,
              numbers: ['4', '11'],
            },
            lumber: {
              production: 10,
              tiles: 3,
              numbers: ['9', '10'],
            },
            wool: {
              production: 10,
              tiles: 2,
              numbers: ['8'],
            },
          },
          buildings: {
            city: 4,
            settlement: 1,
          },
          numbers: ['4', '5', '6', '8', '9', '10', '11', '12'],
        },
        red: {
          resources: {
            production: 26,
            lumber: {
              production: 8,
              tiles: 2,
              numbers: ['9'],
            },
            ore: {
              production: 10,
              tiles: 3,
              numbers: ['5', '6', '12'],
            },
            grain: {
              production: 4,
              tiles: 1,
              numbers: ['9'],
            },
            wool: {
              production: 4,
              tiles: 2,
              numbers: ['3'],
            },
          },
          buildings: {
            city: 3,
            settlement: 1,
          },
          numbers: ['3', '5', '6', '9', '12'],
        },
      },
      statistics: {
        brick: { value: 10, odds: '17.24' },
        grain: { value: 10, odds: '17.24' },
        lumber: { value: 14, odds: '24.14' },
        ore: { value: 10, odds: '17.24' },
        wool: { value: 14, odds: '24.14' },
        total: 58,
      },
    })
  );
