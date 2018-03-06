import { EAdvancedSortMethod, ESortMethod, INumberColumnDesc } from '../../model';
import ColumnBuilder from './ColumnBuilder';
export default class NumberColumnBuilder extends ColumnBuilder<INumberColumnDesc> {
    constructor(column: string);
    mapping(type: 'linear' | 'sqrt' | 'pow1.1' | 'pow2' | 'pow3', domain: [number, number], range?: [number, number]): this | undefined;
    scripted(code: string, domain: [number, number]): this;
    asArray(labels?: string[] | number, sort?: EAdvancedSortMethod): this;
    asMap(sort?: EAdvancedSortMethod): this;
    asBoxPlot(sort?: ESortMethod): this;
    build(data: any[]): INumberColumnDesc;
}
export declare function buildNumberColumn(column: string, domain?: [number, number]): NumberColumnBuilder;