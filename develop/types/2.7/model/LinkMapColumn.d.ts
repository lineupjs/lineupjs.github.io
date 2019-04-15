import Column, { widthChanged, labelChanged, metaDataChanged, dirty, dirtyHeader, dirtyValues, rendererTypeChanged, groupRendererChanged, summaryRendererChanged, visibilityChanged, dirtyCaches } from './Column';
import ValueColumn, { dataLoaded } from './ValueColumn';
import { IDataRow } from './interfaces';
import MapColumn, { IMapColumnDesc } from './MapColumn';
import LinkColumn, { ILinkDesc } from './LinkColumn';
import { IEventListener } from '../internal';
import { EAlignment } from './StringColumn';
import { IKeyValue } from './IArrayColumn';
import { ILink } from './LinkColumn';
export declare type ILinkMapColumnDesc = ILinkDesc & IMapColumnDesc<string>;
/**
 * emitted when the pattern property changes
 * @asMemberOf LinkMapColumn
 * @event
 */
export declare function patternChanged_LMC(previous: string, current: string): void;
/**
 * a string column with optional alignment
 */
export default class LinkMapColumn extends MapColumn<string> {
    static readonly EVENT_PATTERN_CHANGED: string;
    readonly alignment: EAlignment;
    readonly escape: boolean;
    private pattern;
    private patternFunction;
    readonly patternTemplates: string[];
    constructor(id: string, desc: Readonly<ILinkMapColumnDesc>);
    setPattern(pattern: string): void;
    getPattern(): string;
    protected createEventList(): string[];
    on(type: typeof LinkColumn.EVENT_PATTERN_CHANGED, listener: typeof patternChanged_LMC | null): this;
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
    getValue(row: IDataRow): {
        key: string;
        value: string;
    }[] | null;
    getLabels(row: IDataRow): {
        key: string;
        value: string;
    }[];
    getLinkMap(row: IDataRow): IKeyValue<ILink>[];
    private transformValue(v, row, key);
    dump(toDescRef: (desc: any) => any): any;
    restore(dump: any, factory: (dump: any) => Column | null): void;
}
