import Column, { IColumnDesc } from './Column';
import { IDataRow, IGroup } from './interfaces';
export interface IAction {
    name: string;
    icon: string;
    action(row: IDataRow): void;
}
export interface IGroupAction {
    name: string;
    icon: string;
    action(group: IGroup, rows: IDataRow[]): void;
}
export declare function createActionDesc(label?: string, actions?: Readonly<IAction>[], groupActions?: Readonly<IGroupAction>[]): {
    type: string;
    label: string;
    actions: Readonly<IAction>[];
    groupActions: Readonly<IGroupAction>[];
    fixed: boolean;
};
export interface IActionDesc {
    actions?: Readonly<IAction>[];
    groupActions?: Readonly<IGroupAction>[];
}
export declare type IActionColumnDesc = IColumnDesc & IActionDesc;
export default class ActionColumn extends Column {
    readonly actions: IAction[];
    readonly groupActions: IGroupAction[];
    constructor(id: string, desc: Readonly<IActionColumnDesc>);
    getLabel(): string;
    getValue(): string;
    compare(): number;
}
