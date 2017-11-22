import { ZCollection } from './ZCollection';


export class ZArray<T> extends Array<T>  {

    private constructor(items?: ZArray<T> | Array<T>) {
        super(...items);
        // Object.setPrototypeOf(this, Object.create(ZArray.prototype));
    }

    static create<T>(existing?: Array<T> | ZArray<T>): ZArray<T> {
        let created: ZArray<T> = Object.create(ZArray.prototype);

        if (!!existing) {
            for (let i = 0; i < existing.length; i++) {
                created.push(existing[i]);
            }
        }

        return created;

    }

    public all(predicate: Function): boolean {
        // Returns for if predicate returns true for all elements
        for (let i = 0; i < this.length; i++) {
            if (!predicate(this[i])) {
                return false;
            }
        }
        return true;
    }

    public append(item: T) {
        let newArray: ZArray<T> = <ZArray<T>>this.slice();
        return newArray.push(item)
    }

    public contains(item: T) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === item) {
                return true;
            }
        }
        return false;
    }

    public difference(other: ZArray<T>): ZArray<T> {
        // Returns the set of all elements found in this ZArray but not the other
        let diff = ZArray.create<T>(),
            localUniq: ZArray<T> = this.uniq(),
            otherUniq: ZArray<T> = other.uniq();

        for (let i = 0; i < this.length; i++) {
            if (!otherUniq.contains(localUniq[i])) {
                diff.push(localUniq[i]);
            }
        }

        return diff;
    }

    public differenceBy(other: ZArray<T>, predicate: Function) {
        // Returns the set of all elements found in this ZArray but not the other
        
    }



    public drop(index: number) {
        let newArray: ZArray<T> = <ZArray<T>>this.slice();
        return newArray.slice(0, index);
    }

    public flatten() {
        /*function doFlatten(arr: ZArray<T> | Array<T>) {
            if (typeof(arr) === "array") {

            }
        }*/

    }

    public first(): T {
        return this[0];
    }

    public insert(item: T) {
        // Return new array with item added to front
        return this.slice().unshift(item);
    }

    public intersection(other: ZArray<T>) {
        // Returns ZArray of elements found in this and the other
        let intersection = ZArray.create<T>(),
            localUniq: ZArray<T> = this.uniq(),
            otherUniq: ZArray<T> = other.uniq();

        for (let i = 0; i < this.length; i++) {
            if (otherUniq.contains(localUniq[i])) {
                intersection.push(localUniq[i]);
            }
        }

        return intersection;
    }

    public intersectionBy(other: ZArray<T>, predicate: Function) {

    }


    public isEmpty(): boolean {
        return this.length === 0;
    }

    public last(): T {
        return this[this.length];
    }


    public max(): number {
        this.checkNumericalTypes();
        let max = <number><any>this[0];
        for (let i = 0; i < this.length; i++) {
            if (<number><any>this[i] > max) {
                max = <number><any>this[i];
            }
        }
        return max;
    }

    public maxBy(predicate: Function): number {
        let max: number = <number><any>this[0];
        for (let i = 0; i < this.length; i++) {
            if (predicate(<number><any>this[i], max)) {
                max = <number><any>this[i];
            }
        }
        return max;
    }

    public mean(): number {
        this.checkNumericalTypes();
        return this.sum() / this.length;
    }

    public median() {
        // Returns median of ZArray. Assumes already sorted array of numbers
        this.checkNumericalTypes();

        let medianIndex = Math.floor(this.length / 2);

        if (this.length % 2 === 0) {
            return this[medianIndex];
        } else {
            return (<number><any>this[medianIndex - 1] + <number><any>this[medianIndex]) / 2.0;
        }

    }

    public min(): number {
        this.checkNumericalTypes();
        let min = <number><any>this[0];
        for (let i = 0; i < this.length; i++) {
            if (<number><any>this[i] < min) {
                min = <number><any>this[i];
            }
        }
        return min;
    }

    public minBy(predicate: Function): number {
        let min: number = <number><any>this[0];
        for (let i = 0; i < this.length; i++) {
            if (predicate(<number><any>this[i], min)) {
                min = <number><any>this[i];
            }
        }
        return min;
    }

    public none(predicate: Function) {
        for (let i = 0; i < this.length; i++) {
            if (predicate(this[i])) {
                return false;
            }
        }
        return true;
    }

    public partition(predicate: Function) {

    }

    public prepend(other: ZArray<T>): ZArray<T> { 
        return <ZArray<T>>other.concat(this);
    }

    public product(): number {
        this.checkNumericalTypes();
        let product: number = <number><any>this[0];
        for (let i = 1; i < this.length; i++) {
            product *= <number><any>this[i];
        }
        return product;
    }


    public reject(predicate: Function): ZArray<T> {
        // Complement of filter(). Returns values that do not meet predicate
        let newArray: ZArray<T> = ZArray.create<T>();
        for (let i = 0; i < this.length; i++) {
            if (!predicate(this[i])) {
                newArray.push(this[i]);
            }
        }
        return newArray;

    }

    public sortBy(predicate: Function) {

    }

    public sum(): number {
        this.checkNumericalTypes();
        let sum: number = 0;
        for (let i = 0; i < this.length; i++) {
            sum += <number><any>this[i];
        }
        return sum;
    }

    public symetricDifference(other: ZArray<T>): ZArray<T> {
        // Returns all elements that are in one ZArray, but now both
        let diff = ZArray.create<T>(),
            localUniq: ZArray<T> = this.uniq(),
            otherUniq: ZArray<T> = other.uniq();

        for (let i = 0; i < localUniq.length; i++) {
            if (!otherUniq.contains(localUniq[i])) {
                diff.push(localUniq[i]);
            }
        }

        for (let i = 0; i < otherUniq.length; i++) {
            if (!localUniq.contains(otherUniq[i])) {
                diff.push(otherUniq[i]);
            }
        }

        return diff;

    }

    public symetricDifferenceWith(other: ZArray<T>, contains: Function) {
        /* Returns all elements that are in one ZArray, but not both, with 
         * equality determined by provided function. contains() must be a  2-arity 
         * funciton that returns true if the collection provided in the
         * first argument contains the value of the second argument
         */

        let diff = ZArray.create<T>(),
            localUniq: ZArray<T> = this.uniq(),
            otherUniq: ZArray<T> = other.uniq();

        for (let i = 0; i < localUniq.length; i++) {
            if (contains(otherUniq, localUniq[i])) {
                diff.push(localUniq[i]);
            }
        }

        for (let i = 0; i < otherUniq.length; i++) {
            if (contains(localUniq, otherUniq[i])) {
                diff.push(otherUniq[i]);
            }
        }

        return diff;

    }

    public tail() {
        return this.slice(1);
    }

    public takeLast(n: number) {
        // returns the ZArray without the last n elements
        const index: number = -1 * n;
        return this.slice(index);
    }

    public transpose() {

    }

    public union(other: ZArray<T>) {
        // All elements in this set or the other set
        let union: ZArray<T> = <ZArray<T>>this.slice();

        for (let i = 0; i < other.length; i++) {
            union.push(other[i]);
        }

        return union.uniq();

    }

    public unionWith() {

    }

    public uniq() {
        // Returns ZArray of all unique elements
        return new ZArray<T>(Array.from(new Set<T>(this)));
    }

    public uniqBy(predicate: Function) {

    }

    public zip() {

    }

    private checkNumericalTypes(): void {
        const typeString: string = typeof (this[0]);
        if (typeString !== "number") {
            console.warn(`Warning: This method is only defined for arrays of numbers, not ${typeString}`)
        }
    }
}
