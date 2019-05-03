import { IAbortAblePromise } from 'lineupengine';
import { IAdvancedBoxPlotData, ICategoricalStatistics, IDateStatistics, IStatistics, ISequence } from '../internal';
import { Column, ICompareValue, ICategoricalLikeColumn, IDataRow, IDateColumn, IGroup, IndicesArray, INumberColumn, Ranking, UIntTypedArray, ICategory } from '../model';
import { IRenderTask, IRenderTasks } from '../renderer';
import { CompareLookup } from './sort';
/**
 * a render task that is already resolved
 */
export declare class TaskNow<T> implements IRenderTask<T> {
    readonly v: T;
    constructor(v: T);
    then<U = void>(onfullfilled: (value: T) => U): U;
}
/**
 * factory function for
 */
export declare function taskNow<T>(v: T): TaskNow<T>;
/**
 * a render task based on an abortable promise
 */
export declare class TaskLater<T> implements IRenderTask<T> {
    readonly v: IAbortAblePromise<T>;
    constructor(v: IAbortAblePromise<T>);
    then<U = void>(onfullfilled: (value: T | symbol) => U): IAbortAblePromise<U>;
}
export declare function taskLater<T>(v: IAbortAblePromise<T>): TaskLater<T>;
/**
 * similar to Promise.all
 */
export declare function tasksAll<T>(tasks: IRenderTask<T>[]): IRenderTask<T[]>;
export interface IRenderTaskExectutor extends IRenderTasks {
    setData(data: IDataRow[]): void;
    dirtyColumn(col: Column, type: 'data' | 'summary' | 'group'): void;
    dirtyRanking(ranking: Ranking, type: 'data' | 'summary' | 'group'): void;
    groupCompare(ranking: Ranking, group: IGroup, rows: IndicesArray): IRenderTask<ICompareValue[]>;
    preCompute(ranking: Ranking, groups: {
        rows: IndicesArray;
        group: IGroup;
    }[], maxDataIndex: number): void;
    preComputeCol(col: Column): void;
    preComputeData(ranking: Ranking): void;
    copyData2Summary(ranking: Ranking): void;
    copyCache(col: Column, from: Column): void;
    sort(ranking: Ranking, group: IGroup, indices: IndicesArray, singleCall: boolean, maxDataIndex: number, lookups?: CompareLookup): Promise<IndicesArray>;
    terminate(): void;
    valueCache(col: Column): undefined | ((dataIndex: number) => any);
}
export declare class MultiIndices {
    readonly indices: IndicesArray[];
    private readonly maxDataIndex;
    private _joined;
    constructor(indices: IndicesArray[], maxDataIndex: number);
    readonly joined: Uint8Array | Uint16Array | Uint32Array | (ReadonlyArray<number> & ArrayLike<number>);
}
export declare class ARenderTasks {
    protected data: IDataRow[];
    protected readonly valueCacheData: Map<string, Uint8Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array>;
    protected readonly byIndex: (i: number) => IDataRow;
    constructor(data?: IDataRow[]);
    protected byOrder(indices: IndicesArray): ISequence<IDataRow>;
    protected byOrderAcc<T>(indices: IndicesArray, acc: (row: IDataRow) => T): ISequence<T>;
    /**
     * builder factory to create an iterator that can be used to schedule
     * @param builder the builder to use
     * @param order the order to iterate over
     * @param acc the accessor to get the value out of the data
     * @param build optional build mapper
     */
    private builder<T, BR, B, R>(builder, order, acc, build?);
    private builderForEach<T, BR, B, R>(builder, order, acc, build?);
    protected boxplotBuilder<R = IAdvancedBoxPlotData>(order: IndicesArray | null | MultiIndices, col: INumberColumn, raw?: boolean, build?: (stat: IAdvancedBoxPlotData) => R): Iterator<R | null>;
    protected normalizedStatsBuilder<R = IStatistics>(order: IndicesArray | null | MultiIndices, col: INumberColumn, numberOfBins: number, raw?: boolean, build?: (stat: IStatistics) => R): Iterator<R | null>;
    private numberStatsBuilder<R, B, BR>(b, order, col, raw?, build?);
    protected dateStatsBuilder<R = IDateStatistics>(order: IndicesArray | null | MultiIndices, col: IDateColumn, template?: IDateStatistics, build?: (stat: IDateStatistics) => R): Iterator<R | null>;
    protected categoricalStatsBuilder<R = ICategoricalStatistics>(order: IndicesArray | null | MultiIndices, col: ICategoricalLikeColumn, build?: (stat: ICategoricalStatistics) => R): Iterator<R | null>;
    dirtyColumn(col: Column, type: 'data' | 'summary' | 'group'): void;
    protected setValueCacheData(key: string, value: Float32Array | UIntTypedArray | Int32Array | Float64Array | null): void;
    valueCache(col: Column): ((dataIndex: number) => Date | null) | ((dataIndex: number) => ICategory | null) | ((dataIndex: number) => number) | undefined;
}