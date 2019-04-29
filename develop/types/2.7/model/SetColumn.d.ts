import Column, { labelChanged, metaDataChanged, dirty, widthChanged, dirtyHeader, dirtyValues, rendererTypeChanged, groupRendererChanged, summaryRendererChanged, visibilityChanged, dirtyCaches } from './Column';
import { IArrayColumn } from './IArrayColumn';
import { ICategoricalDesc, ICategoricalFilter, ICategory, ISetColumn, ICategoricalColorMappingFunction } from './ICategoricalColumn';
import { IDataRow, ECompareValueType, IValueColumnDesc, IGroup, ITypeFactory } from './interfaces';
import ValueColumn, { dataLoaded } from './ValueColumn';
import { IEventListener } from '../internal';
export interface ISetDesc extends ICategoricalDesc {
    separator?: string;
}
export declare type ISetColumnDesc = ISetDesc & IValueColumnDesc<string[]>;
/**
 * emitted when the color mapping property changes
 * @asMemberOf SetColumn
 * @event
 */
export declare function colorMappingChanged_SSC(previous: ICategoricalColorMappingFunction, current: ICategoricalColorMappingFunction): void;
/**
 * emitted when the filter property changes
 * @asMemberOf SetColumn
 * @event
 */
export declare function filterChanged_SSC(previous: ICategoricalFilter | null, current: ICategoricalFilter | null): void;
/**
 * a string column with optional alignment
 */
export default class SetColumn extends ValueColumn<string[]> implements IArrayColumn<boolean>, ISetColumn {
    static readonly EVENT_FILTER_CHANGED: string;
    static readonly EVENT_COLOR_MAPPING_CHANGED: string;
    readonly categories: ICategory[];
    private readonly separator;
    private readonly lookup;
    private colorMapping;
    /**
     * set of categories to show
     * @type {null}
     * @private
     */
    private currentFilter;
    constructor(id: string, desc: Readonly<ISetColumnDesc>);
    protected createEventList(): string[];
    on(type: typeof SetColumn.EVENT_FILTER_CHANGED, listener: typeof filterChanged_SSC | null): this;
    on(type: typeof SetColumn.EVENT_COLOR_MAPPING_CHANGED, listener: typeof colorMappingChanged_SSC | null): this;
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
    readonly labels: string[];
    readonly dataLength: number;
    getValue(row: IDataRow): string[] | null;
    getLabel(row: IDataRow): string;
    private normalize(v);
    getSet(row: IDataRow): Set<ICategory>;
    getSortedSet(row: IDataRow): ICategory[];
    getCategories(row: IDataRow): ICategory[];
    getColors(row: IDataRow): string[];
    getColorMapping(): ICategoricalColorMappingFunction;
    setColorMapping(mapping: ICategoricalColorMappingFunction): any;
    getValues(row: IDataRow): boolean[];
    getLabels(row: IDataRow): string[];
    getMap(row: IDataRow): {
        key: string;
        value: boolean;
    }[];
    getMapLabel(row: IDataRow): {
        key: string;
        value: string;
    }[];
    iterCategory(row: IDataRow): null[] | ICategory[];
    dump(toDescRef: (desc: any) => any): any;
    restore(dump: any, factory: ITypeFactory): void;
    isFiltered(): boolean;
    filter(row: IDataRow): boolean;
    getFilter(): any;
    setFilter(filter: ICategoricalFilter | null): any;
    clearFilter(): any;
    toCompareValue(row: IDataRow): number[];
    toCompareValueType(): ECompareValueType[];
    group(row: IDataRow): IGroup;
}
