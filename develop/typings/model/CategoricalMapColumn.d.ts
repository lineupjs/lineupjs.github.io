import { ICategoricalDesc, ICategory } from './ICategoricalColumn';
import { IDataRow } from './interfaces';
import MapColumn, { IMapColumnDesc } from './MapColumn';
export declare type ICategoricalMapColumnDesc = ICategoricalDesc & IMapColumnDesc<string | null>;
export default class CategoricalMapColumn extends MapColumn<string | null> {
    readonly categories: ICategory[];
    private readonly missingCategory;
    private readonly lookup;
    constructor(id: string, desc: Readonly<ICategoricalMapColumnDesc>);
    private parseValue(v);
    getCategories(row: IDataRow): {
        key: string;
        value: ICategory | null;
    }[];
    getValue(row: IDataRow): {
        key: string;
        value: string | null;
    }[];
    getLabels(row: IDataRow): {
        key: string;
        value: string;
    }[];
}