import { ITaggleOptions } from '../../interfaces';
import DataProvider from '../../provider/ADataProvider';
import { ALineUp } from '../ALineUp';
export { ITaggleOptions } from '../../interfaces';
export default class Taggle extends ALineUp {
    private readonly spaceFilling;
    private readonly renderer;
    private readonly panel;
    private readonly options;
    constructor(node: HTMLElement, data: DataProvider, options?: Partial<ITaggleOptions>);
    private setViolation(violation?);
    destroy(): void;
    update(): void;
    setHighlight(dataIndex: number, scrollIntoView?: boolean): boolean;
    getHighlight(): number;
    setDataProvider(data: DataProvider, dump?: any): void;
}
