import Column, { IColumnDesc } from './Column';
import CompositeColumn from './CompositeColumn';
import { IDataRow, IGroupData } from './interfaces';
import { INumberColumn } from './NumberColumn';
export interface ICompositeNumberDesc extends IColumnDesc {
    numberFormat?: string;
    missingValue?: number;
}
export declare type ICompositeNumberColumnDesc = ICompositeNumberDesc & IColumnDesc;
export default class CompositeNumberColumn extends CompositeColumn implements INumberColumn {
    missingValue: number;
    private numberFormat;
    constructor(id: string, desc: Readonly<ICompositeNumberColumnDesc>);
    dump(toDescRef: (desc: any) => any): any;
    restore(dump: any, factory: (dump: any) => Column | null): void;
    getLabel(row: IDataRow): string;
    getValue(row: IDataRow): number | null;
    protected compute(_row: IDataRow): number;
    getNumber(row: IDataRow): number;
    getRawNumber(row: IDataRow): number;
    isMissing(row: IDataRow): boolean;
    compare(a: IDataRow, b: IDataRow): any;
    groupCompare(a: IGroupData, b: IGroupData): any;
    getRenderer(): string;
}
