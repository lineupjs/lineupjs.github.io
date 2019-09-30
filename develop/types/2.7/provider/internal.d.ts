import { IAggregationStrategy } from './interfaces';
import { IOrderedGroup, IGroup, IGroupData, IGroupItem } from '../model';
export declare function isAlwaysShowingGroupStrategy(strategy: IAggregationStrategy): boolean;
export declare function hasTopNStrategy(strategy: IAggregationStrategy): boolean;
export declare type IGroupMeta = 'first' | 'last' | 'first last' | null;
export declare function toItemMeta(relativeIndex: number, group: IOrderedGroup, topN: number): IGroupMeta;
export declare function groupParents(group: IGroup, meta: IGroupMeta): {
    group: IGroup;
    meta: IGroupMeta;
}[];
export interface ITopNGetter {
    (item: IGroup): number;
}
/**
 * number of group levels this items ends
 */
export declare function groupEndLevel(item: IGroupData | IGroupItem, topNGetter: ITopNGetter): number;
export declare function isSummaryGroup(group: IGroup, strategy: IAggregationStrategy, topNGetter: ITopNGetter): boolean;
export declare function toRowMeta(item: IGroupData | IGroupItem, strategy: IAggregationStrategy, topNGetter: ITopNGetter): string | null;
export declare function index2pos(groups: IOrderedGroup[], maxDataIndex: number): {
    groups: IOrderedGroup[];
    index2pos: Uint8Array | Uint16Array | Uint32Array;
};
