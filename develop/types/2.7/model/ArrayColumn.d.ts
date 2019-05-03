import ValueColumn from './ValueColumn';
import { IArrayColumn, IArrayDesc } from './IArrayColumn';
import { IDataRow, IValueColumnDesc } from './interfaces';
export interface IArrayColumnDesc<T> extends IArrayDesc, IValueColumnDesc<T[]> {
}
export default class ArrayColumn<T> extends ValueColumn<T[]> implements IArrayColumn<T> {
    private readonly _dataLength;
    private readonly originalLabels;
    constructor(id: string, desc: Readonly<IArrayColumnDesc<T>>);
    readonly labels: string[];
    readonly dataLength: number | null;
    getValue(row: IDataRow): T[] | null;
    getValues(row: IDataRow): T[];
    getLabels(row: IDataRow): string[];
    getLabel(row: IDataRow): string;
    getMap(row: IDataRow): {
        key: string;
        value: T;
    }[];
    getMapLabel(row: IDataRow): {
        key: string;
        value: string;
    }[];
}