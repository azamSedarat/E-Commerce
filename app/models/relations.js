function oneToOneRelation(tableA, tableB){
    tableA.hasOne(tableB);
    tableB.belongsTo(tableA);
}

function oneToManyRelation(tableA, tableB){
    tableA.hasMany(tableB);
    tableB.belongsTo(tableA);

}

function manyToManyRelation(tableA, tableB, tableC){
    tableA.belongsToMany(tableB, { through: tableC });
    tableB.belongsToMany(tableA, { through: tableC });
}

export {
    oneToOneRelation,
    oneToManyRelation,
    manyToManyRelation
}