import Column from './Column';
import INumberColumn, { INumberFilter } from './INumberColumn';
export interface IScale {
    (v: number): number;
    invert(r: number): number;
    domain(): number[];
    domain(domain: number[]): this;
    range(): number[];
    range(range: number[]): this;
}
export interface IMappingFunction {
    apply(v: number): number;
    dump(): any;
    restore(dump: any): void;
    domain: number[];
    clone(): IMappingFunction;
    eq(other: IMappingFunction): boolean;
    getRange(formatter: (v: number) => string): [string, string];
}
export interface IMapAbleColumn extends INumberColumn {
    getOriginalMapping(): IMappingFunction;
    getMapping(): IMappingFunction;
    setMapping(mapping: IMappingFunction): void;
    getFilter(): INumberFilter;
    setFilter(value?: INumberFilter): void;
    getRange(): [string, string];
}
export declare function isMapAbleColumn(col: Column): col is IMapAbleColumn;
export declare class ScaleMappingFunction implements IMappingFunction {
    private type;
    private s;
    constructor(domain?: number[], type?: string, range?: number[]);
    domain: number[];
    range: number[];
    getRange(format: (v: number) => string): [string, string];
    apply(v: number): number;
    invert(r: number): number;
    readonly scaleType: string;
    dump(): any;
    eq(other: IMappingFunction): boolean;
    restore(dump: any): void;
    clone(): ScaleMappingFunction;
}
export declare class ScriptMappingFunction implements IMappingFunction {
    domain: number[];
    private _code;
    private f;
    constructor(domain?: number[], _code?: string);
    code: string;
    getRange(): [string, string];
    apply(v: number): number;
    dump(): any;
    eq(other: IMappingFunction): boolean;
    restore(dump: any): void;
    clone(): ScriptMappingFunction;
}
export interface IMapAbleDesc {
    map?: any;
    domain?: [number, number];
    range?: [number, number];
}
export declare function createMappingFunction(dump: any): IMappingFunction;
export declare function restoreMapping(desc: IMapAbleDesc): IMappingFunction;