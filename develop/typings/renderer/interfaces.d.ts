import { ICategoricalStatistics, IStatistics } from '../internal/math';
import { ICategoricalColumn, IDataRow, IGroup, INumberColumn } from '../model';
import Column from '../model/Column';
import { IDataProvider } from '../provider/ADataProvider';
import DialogManager from '../ui/dialogs/DialogManager';
export interface IImposer {
    color?(row: IDataRow | null): string | null;
}
export interface ICellRenderer {
    readonly template: string;
    update(node: HTMLElement, d: IDataRow, i: number, group: IGroup): void;
    render(ctx: CanvasRenderingContext2D, d: IDataRow, i: number, group: IGroup): void;
}
export interface IGroupCellRenderer {
    readonly template: string;
    update(node: HTMLElement, group: IGroup, rows: IDataRow[]): void;
}
export interface ISummaryRenderer {
    readonly template: string;
    update(node: HTMLElement, hist: IStatistics | ICategoricalStatistics | null): void;
}
export interface IRenderContext {
    renderer(col: Column, imposer?: IImposer): ICellRenderer;
    groupRenderer(col: Column, imposer?: IImposer): IGroupCellRenderer;
    summaryRenderer(co: Column, interactive: boolean, imposer?: IImposer): ISummaryRenderer;
    statsOf(col: (INumberColumn | ICategoricalColumn) & Column): ICategoricalStatistics | IStatistics | null;
    readonly idPrefix: string;
    option<T>(key: string, defaultValue: T): T;
    readonly totalNumberOfRows: number;
    colWidth(col: Column): number;
    readonly provider: IDataProvider;
    readonly dialogManager: DialogManager;
}
export declare enum ERenderMode {
    CELL = 0,
    GROUP = 1,
    SUMMARY = 2,
}
export interface ICellRendererFactory {
    readonly title: string;
    readonly groupTitle?: string;
    readonly summaryTitle?: string;
    canRender(col: Column, mode: ERenderMode): boolean;
    create(col: Column, context: IRenderContext, hist: IStatistics | ICategoricalStatistics | null, imposer?: IImposer): ICellRenderer;
    createGroup(col: Column, context: IRenderContext, hist: IStatistics | ICategoricalStatistics | null, imposer?: IImposer): IGroupCellRenderer;
    createSummary(col: Column, context: IRenderContext, interactive: boolean, imposer?: IImposer): ISummaryRenderer;
}
export default IRenderContext;