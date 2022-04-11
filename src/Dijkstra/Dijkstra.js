
let td = +prompt('Тверь - Дубна')
let tk = +prompt('Тверь - Клин')
let kd = +prompt('Клин - Дубна')
let km = +prompt('Клин - Москва')
let dm = +prompt('Дубна - Москва')


const matrix = [
    [0, td, Infinity, tk],
    [td, 0, dm, kd],
    [Infinity, dm, 0, km],
    [tk, kd, km, 0],
]

function Dijkstra(matrix, start = 0) {
    const rows = matrix.length,
        cols = matrix[0].length;
    const distance = new Array(rows).fill(Infinity);
    distance[start] = 0;
    for (let i = 0; i < rows; i++) {
        if (distance[i] < Infinity) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] + distance[i] < distance[j]) {
                    distance[j] = matrix[i][j] + distance[i];
                    i = 0
                }
            }

        }
    }
    return distance;
}
let res = Dijkstra(matrix, 0)
alert('Время в пути: ' + res[2])
