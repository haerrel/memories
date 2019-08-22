const in_mem_db = [];

function insert(obj) {
    obj.id = in_mem_db.length == 0
        ? 0
        : in_mem_db.sort((e1, e2) => e2.id - e1.id)[0].id + 1;
    in_mem_db.push(obj);
}

function get(id) {
    for (const card of getAll()) {
        if (card.id == id) {
            return card;
        }
    }
    return null;
}

function getAll() {
    return in_mem_db;
}

module.exports = {
    insert,
    get,
    getAll
};
