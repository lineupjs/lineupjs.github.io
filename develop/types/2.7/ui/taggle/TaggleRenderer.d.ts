import { GridStyleManager } from 'lineupengine';
import { ILineUpOptions } from '../../config';
import { AEventDispatcher, IEventListener } from '../../internal';
import { DataProvider } from '../../provider';
import { IRenderContext } from '../../renderer';
import { IEngineRankingContext } from '../EngineRanking';
import { IRankingHeaderContext, IRankingHeaderContextContainer } from '../interfaces';
import { IRule } from './rules';
/**
 * emitted when the highlight changes
 * @asMemberOf TaggleRenderer
 * @param dataIndex the highlghted data index or -1 for none
 * @event
 */
export declare function highlightChanged(dataIndex: number): void;
export interface ITaggleOptions {
    violationChanged(rule: IRule, violation: string): void;
    rowPadding: number;
}
export default class TaggleRenderer extends AEventDispatcher {
    data: DataProvider;
    static readonly EVENT_HIGHLIGHT_CHANGED: string;
    private isDynamicLeafHeight;
    private rule;
    private levelOfDetail;
    private readonly resizeListener;
    private readonly renderer;
    private readonly options;
    constructor(data: DataProvider, parent: HTMLElement, options: (Partial<ITaggleOptions> & Readonly<ILineUpOptions>));
    readonly style: GridStyleManager;
    readonly ctx: IRankingHeaderContextContainer & IRenderContext & IEngineRankingContext;
    pushUpdateAble(updateAble: (ctx: IRankingHeaderContext) => void): void;
    private dynamicHeight(data, ranking);
    protected createEventList(): string[];
    on(type: typeof TaggleRenderer.EVENT_HIGHLIGHT_CHANGED, listener: typeof highlightChanged | null): this;
    on(type: string | string[], listener: IEventListener | null): this;
    zoomOut(): void;
    zoomIn(): void;
    switchRule(rule: IRule | null): void;
    destroy(): void;
    update(): void;
    setDataProvider(data: DataProvider): void;
    setHighlight(dataIndex: number, scrollIntoView: boolean): boolean;
    getHighlight(): number;
    enableHighlightListening(enable: boolean): void;
}
