import { IBoxPlotData, IEventListener } from '../internal';
import Column, { dirty, dirtyCaches, dirtyHeader, dirtyValues, groupRendererChanged, labelChanged, metaDataChanged, rendererTypeChanged, summaryRendererChanged, visibilityChanged, widthChanged } from './Column';
import { IDataRow, ECompareValueType, IValueColumnDesc, ITypeFactory } from './interfaces';
import { ESortMethod, IBoxPlotColumn, INumberDesc, INumberFilter, IColorMappingFunction, IMappingFunction } from './INumberColumn';
import ValueColumn, { dataLoaded } from './ValueColumn';
export interface IBoxPlotDesc extends INumberDesc {
    sort?: ESortMethod;
}
export declare type IBoxPlotColumnDesc = IBoxPlotDesc & IValueColumnDesc<IBoxPlotData>;
/**
 * emitted when the sort method property changes
 * @asMemberOf BoxPlotColumn
 * @event
 */
export declare function sortMethodChanged_BPC(previous: ESortMethod, current: ESortMethod): void;
/**
 * emitted when the mapping property changes
 * @asMemberOf BoxPlotColumn
 * @event
 */
export declare function mappingChanged_BPC(previous: IMappingFunction, current: IMappingFunction): void;
/**
 * emitted when the color mapping property changes
 * @asMemberOf BoxPlotColumn
 * @event
 */
export declare function colorMappingChanged_BPC(previous: IColorMappingFunction, current: IColorMappingFunction): void;
/**
 * emitted when the filter property changes
 * @asMemberOf BoxPlotColumn
 * @event
 */
export declare function filterChanged_BPC(previous: INumberFilter | null, current: INumberFilter | null): void;
export default class BoxPlotColumn extends ValueColumn<IBoxPlotData> implements IBoxPlotColumn {
    static readonly EVENT_MAPPING_CHANGED: string;
    static readonly EVENT_COLOR_MAPPING_CHANGED: string;
    static readonly EVENT_SORTMETHOD_CHANGED: string;
    static readonly EVENT_FILTER_CHANGED: string;
    private readonly numberFormat;
    private sort;
    private mapping;
    private colorMapping;
    private original;
    /**
     * currently active filter
     * @type {{min: number, max: number}}
     * @private
     */
    private currentFilter;
    constructor(id: string, desc: Readonly<IBoxPlotColumnDesc>, factory: ITypeFactory);
    getNumberFormat(): (n: number) => string;
    toCompareValue(row: IDataRow): number;
    toCompareValueType(): ECompareValueType;
    getBoxPlotData(row: IDataRow): IBoxPlotData | null;
    getRange(): [string, string];
    getRawBoxPlotData(row: IDataRow): IBoxPlotData | null;
    getRawValue(row: IDataRow): IBoxPlotData | null;
    getExportValue(row: IDataRow, format: 'text' | 'json'): any;
    getValue(row: IDataRow): IBoxPlotData | null;
    getNumber(row: IDataRow): number;
    getRawNumber(row: IDataRow): number;
    iterNumber(row: IDataRow): number[];
    iterRawNumber(row: IDataRow): number[];
    getLabel(row: IDataRow): string;
    getSortMethod(): ESortMethod;
    setSortMethod(sort: ESortMethod): void;
    dump(toDescRef: (desc: any) => any): any;
    restore(dump: any, factory: ITypeFactory): void;
    protected createEventList(): string[];
    on(type: typeof BoxPlotColumn.EVENT_COLOR_MAPPING_CHANGED, listener: typeof colorMappingChanged_BPC | null): this;
    on(type: typeof BoxPlotColumn.EVENT_MAPPING_CHANGED, listener: typeof mappingChanged_BPC | null): this;
    on(type: typeof BoxPlotColumn.EVENT_SORTMETHOD_CHANGED, listener: typeof sortMethodChanged_BPC | null): this;
    on(type: typeof BoxPlotColumn.EVENT_FILTER_CHANGED, listener: typeof filterChanged_BPC | null): this;
    on(type: typeof ValueColumn.EVENT_DATA_LOADED, listener: typeof dataLoaded | null): this;
    on(type: typeof Column.EVENT_WIDTH_CHANGED, listener: typeof widthChanged | null): this;
    on(type: typeof Column.EVENT_LABEL_CHANGED, listener: typeof labelChanged | null): this;
    on(type: typeof Column.EVENT_METADATA_CHANGED, listener: typeof metaDataChanged | null): this;
    on(type: typeof Column.EVENT_DIRTY, listener: typeof dirty | null): this;
    on(type: typeof Column.EVENT_DIRTY_HEADER, listener: typeof dirtyHeader | null): this;
    on(type: typeof Column.EVENT_DIRTY_VALUES, listener: typeof dirtyValues | null): this;
    on(type: typeof Column.EVENT_DIRTY_CACHES, listener: typeof dirtyCaches | null): this;
    on(type: typeof Column.EVENT_RENDERER_TYPE_CHANGED, listener: typeof rendererTypeChanged | null): this;
    on(type: typeof Column.EVENT_GROUP_RENDERER_TYPE_CHANGED, listener: typeof groupRendererChanged | null): this;
    on(type: typeof Column.EVENT_SUMMARY_RENDERER_TYPE_CHANGED, listener: typeof summaryRendererChanged | null): this;
    on(type: typeof Column.EVENT_VISIBILITY_CHANGED, listener: typeof visibilityChanged | null): this;
    on(type: string | string[], listener: IEventListener | null): this;
    getOriginalMapping(): IMappingFunction;
    getMapping(): IMappingFunction;
    setMapping(mapping: IMappingFunction): void;
    getColor(row: IDataRow): any;
    getColorMapping(): IColorMappingFunction;
    setColorMapping(mapping: IColorMappingFunction): void;
    isFiltered(): any;
    getFilter(): INumberFilter;
    setFilter(value: INumberFilter | null): void;
    filter(row: IDataRow): any;
    clearFilter(): any;
}