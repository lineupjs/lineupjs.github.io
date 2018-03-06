import { Column, IColumnDesc } from '../../model';
import { Taggle, LineUp } from '../../ui';
import { ILineUpOptions, ITaggleOptions } from '../../interfaces';
import { IBuilderAdapterRankingProps } from './ranking';
import { LocalDataProvider } from '../../provider';
export interface IBuilderAdapterDataProps {
    data: any[];
    selection?: number[] | null;
    highlight?: number | null;
    onSelectionChanged?(selection: number[]): void;
    onHighlightChanged?(highlight: number): void;
    singleSelection?: boolean;
    filterGlobally?: boolean;
    noCriteriaLimits?: boolean;
    maxGroupColumns?: number;
    maxNestedSortingCriteria?: number;
    columnTypes?: {
        [type: string]: typeof Column;
    };
    deriveColumns?: boolean | string[];
    deriveColors?: boolean;
    restore?: any;
    defaultRanking?: boolean | 'noSupportTypes';
}
export declare type IBuilderAdapterProps = ITaggleOptions & IBuilderAdapterDataProps;
export interface IChangeDetecter {
    (prop: (keyof IBuilderAdapterProps)): boolean;
}
export interface IBuilderAdapter {
    props(): Readonly<IBuilderAdapterProps>;
    createInstance(data: LocalDataProvider, options: Partial<ILineUpOptions>): LineUp | Taggle;
    rankingBuilders(): IBuilderAdapterRankingProps[];
    columnDescs(data: any[]): IColumnDesc[];
}
export declare class Adapter {
    private readonly adapter;
    private data;
    private instance;
    private prevRankings;
    private prevColumns;
    private prevHighlight;
    private readonly onSelectionChanged;
    private readonly onHighlightChanged;
    constructor(adapter: IBuilderAdapter);
    private readonly props;
    componentDidMount(): void;
    private resolveColumnDescs(data);
    private resolveRankings();
    private buildColumns(data, ctx);
    private buildRankings(data, rankings);
    private buildProvider();
    private updateLineUp(changeDetector, providerChanged);
    private updateProvider(changeDetector);
    componentDidUpdate(changeDetector: IChangeDetecter): void;
    componentWillUnmount(): void;
}
