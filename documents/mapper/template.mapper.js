exports.templateRow = async(resultSet) => {
    let row;
    let resultRows = [];
    while ((row = await resultSet.getRow())){

        resultRows.push(row);
    }
    await resultSet.close();
    row = resultRows[0];
    const template = {}
    template.id = row[0]
    template.attachedFlag = row[1]
    template.subject = row[2]
    template.body = row[3]
    template.htmlFlag = row[4]
    template.userApp = row[5]
    return template;
}
