/*
Interface For ZArray and ZList, others to come
*/

export interface ZCollection<T> {
    all(): Function;
    append(): Function;
    contains(): Function;
    difference(): Function;
    differenceWith(): Function;
    drop(): Function;
    filter?(): Function;
    find(): Function;
    findIndex(): Function;
    flatten(): Function;
    forEach(): Function;
    first(): Function;
    indexOf?(): Function;
    insert(): Function;
    intersection(): Function;
    intersectionWith(): Function;
    isEmpty(): Function;
    last(): Function;
    map(): Function;
    mapAccum(): Function;
    mapAccumRight(): Function;
    max?(): Function;
    maxBy(): Function;
    mean(): Function;
    median(): Function;
    min(): Function;
    minBy(): Function;
    none(): Function;
    partition(): Function;
    partitionWith(): Function;
    prepend(): Function;
    product(): Function;
    reduce?(): Function;
    reduceBy(): Function;
    reduceRight?(): Function;
    reject(): Function;
    reverse?(): Function;
    slice?(): Function;
    sort?(): Function;
    sortBy(): Function;
    sum(): Function;
    symetricDifference(): Function;
    symetricDifferenceBy(): Function;
    tail(): Function;
    takeLast(): Function;
    transpose(): Function;
    union(): Function;
    unionWith(): Function;
    uniq(): Function;
    uniqBy(): Function;
    update(): Function;
    zip(): Function;
}
