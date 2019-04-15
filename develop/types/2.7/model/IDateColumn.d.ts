import { IForEachAble } from '../internal';
import Column from './Column';
import { IColumnDesc, IDataRow } from './interfaces';
import { INumberFilter } from './INumberColumn';
export interface IDateColumn extends Column {
    getDate(row: IDataRow): Date | null;
    iterDate(row: IDataRow): IForEachAble<Date | null>;
}
export interface IDateDesc {
    /**
     * d3 formatting option
     * @default %x
     */
    dateFormat?: string;
    /**
     * d3 formation option
     * @dfeault dateFormat
     */
    dateParse?: string;
}
/**
 * checks whether the given column or description is a date column, i.e. the value is a date
 * @param col
 * @returns {boolean}
 */
export declare function isDateColumn(col: Column): col is IDateColumn;
export declare function isDateColumn(col: IColumnDesc): col is IDateDesc & IColumnDesc;
export declare type IDateFilter = INumberFilter;
export declare type IDateGranularity = 'century' | 'decade' | 'year' | 'month' | 'week' | 'day_of_week' | 'day_of_month' | 'day_of_year' | 'hour' | 'minute' | 'second';
export interface IDateGrouper {
    /**
     * granuality level for the grouping
     */
    granularity: IDateGranularity;
    /**
     * whether circular occurrences should be in the same bin
     * e.g. granularity = month
     * circular: 01.2018 == 01.2017
     * not circular: 01.2018 != 01.2017
     */
    circular: boolean;
}
