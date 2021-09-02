exports.fetchRows = async(resultSet) => {
    let row;
    let resultRows = [];
    while ((row = await resultSet.getRow())){
        resultRows.push(row);
    }
    await resultSet.close();
    return resultRows[0];
}

exports.fetchRow = async(resultSet) => {
    let row;
    let resultRows = [];
    while ((row = await resultSet.getRow())){
        resultRows.push(row);
    }
    await resultSet.close();
    return resultRows[0];
}

exports.getTime = async() => {
    return new Date(Date.UTC(2021, 8, 7, 1, 11, 20));
}
