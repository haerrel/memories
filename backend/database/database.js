const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

const noOp = () => {};
const pipe = (data) => {return data;};


function insert(data, onSuccess, onError) {
    query(
        'INSERT INTO card (image_data, hash, date)' +
        'VALUES (\'' +
        data.image_data + '\', \'' +
        data.hash + '\', \'' +
        data.date + '\');',
        onSuccess,
        onError
    );
}

function get(id, onSuccess, onError = noOp) {
    query(
        `SELECT * FROM card WHERE ID=${id}`,
        onSuccess,
        onError,
        function(data) {
            if (data.length) {
                onSuccess(data[0]);
            } else {
                onError();
            }
        }
    );
}

function update(id, data) {
    query(
        'UPDATE card SET ' +
        'image_data=\'' + data.image_data + '\', ' +
        'open=\'' + data.open + '\' ' +
        `WHERE ID=${id}`
    );
}

function getAll(onSuccess, onError) {
    query(
        'SELECT * FROM card ORDER BY date ASC;',
        onSuccess,
        onError,
    );
}

function query(sql, onSuccess = noOp, onError = noOp, dataTransformation = pipe) {
    pool.query(sql, (err, res) => {
        if (err) {
            console.log(err);
            onError();
        }
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        onSuccess(dataTransformation(res.rows));
    });
}

module.exports = {
    insert,
    get,
    update,
    getAll
};
