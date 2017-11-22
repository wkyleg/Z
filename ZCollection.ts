/*
Interface For ZArray and ZList
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


/*
MASTER
all
append
contains
difference
differenceWith
drop
filter
find
findIndex
flatten
forEach
first
indexOf
insert
intersection
intersectionWith
isEmpty
last
length
map
mapAccum
mapAccumRight
max
maxBy
mean
median
min
minBy
none
partition
partitionWith
prepend
product
reduce
reduceBy
reduceRight
reject
reverse
slice
sort
sortBy
sum
symetricDifference
symetricDifferenceBy
tail
takeLast
transpose
union
unionWith
uniq
uniqBy
update
zip
*/

/*
LODASH:
chunk
compact
concat
difference
differenceBy
drop
dropRight
findIndex
flattenDeep
flattenDepth
head
indexOf
initial
intersection
intersectionWith
join
last
pull
pullAll
pullAt
remove
reverse
slice
sortedUniq
sortedUniqBy
tail
take
takeRight
union
unionBy
unionWith
uniq
unzip
unzipWith
without
zip
countBy
every
filter
find 
findLast
flatMap
flatMapDeep
forEach
includes
map
partition
reduce
reduceRight
reject
sample
size
some
sortBy

FROM RAMDA:

all
apeture
append
contains
countBy
difference
differenceWith
drop
dropLast
filter
find
findIndex
findLast
findLastIndex
flatten
forEach
first
indexOf
insert
intersection
isEmpty
last
length
map
mapAccum
mapAccumRight
max
maxBy
mean
median
min
minBy
none
partition
prepend
product
project
reduce
reduceBy
reduceRight
reduceWhile
reject
reverse
slice
sort
sortBy
sum
symmetricDifference
symetricDifferenceWith
tail
take
takeLast
transpose
union
unionWith
uniq
uniqBy
update
zip

LODASH:
chunk
compact
concat
difference
differenceBy
drop
dropRight
findIndex
flattenDeep
flattenDepth
head
indexOf
initial
intersection
intersectionWith
join
last
pull
pullAll
pullAt
remove
reverse
slice
sortedUniq
sortedUniqBy
tail
take
takeRight
union
unionBy
unionWith
uniq
unzip
unzipWith
without
zip
countBy
every
filter
find 
findLast
flatMap
flatMapDeep
forEach
includes
map
partition
reduce
reduceRight
reject
sample
size
some
sortBy


*/
