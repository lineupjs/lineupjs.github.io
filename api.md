---
title: API Documentation
layout: page
menu: bar
---

LineUp is implemented in clean TypeScript in an object oriented manner. A fully generated API documentation based on [TypeDoc](http://typedoc.org) is available at [https://lineup.js.org/main/docs](https://lineup.js.org/main/docs).

LineUp can be build manually or using via the builder design pattern (see [Advanced Usage Example](./getting-started)). The builder design pattern in the more common way.

### LineUp Builder

The simplest methods to create a new instance are:
 - [asLineUp](./main/docs/modules/_builder_index_.html#aslineup) returning a ready to use [LineUp](./main/docs/classes/_ui_lineup_.lineup.html) instance
   ```typescript
   asLineUp(node: HTMLElement, data: any[], ...columns: string[]): LineUp
   ```
 - [asTaggle](./main/docs/modules/_builder_index_.html#astaggle) returning a ready to use [Taggle](./main/docs/classes/_ui_taggle_taggle_.taggle.html) instance
   ```typescript
   asTaggle(node: HTMLElement, data: any[], ...columns: string[]): Taggle
   ```
 - [builder](./main/docs/modules/_builder_databuilder_.html#builder) returning a new [DataBuilder](./main/docs/classes/_builder_databuilder_.databuilder.html)
    ```typescript
    builder(arr: any[]): DataBuilder`
    ```

The `DataBuilder` allows on the one hand to specify the individual columns more specificly and the creation of custom rankings.

Builder factory functions for creating column descriptions include:
 - [buildStringColumn](./main/docs/modules/_builder_column_stringcolumnbuilder_.html#buildstringcolumn) returning a new [StringColumnBuilder](./main/docs/classes/_builder_column_stringcolumnbuilder_.stringcolumnbuilder.html)
   ```typescript
   buildStringColumn(column: string): StringColumnBuilder
   ```
 - [buildNumberColumn](./main/docs/modules/_builder_column_numbercolumnbuilder_.html#buildnumbercolumn) returning a new [NumberColumnBuilder](./main/docs/classes/_builder_column_numbercolumnbuilder_.numbercolumnbuilder.html)
   ```typescript
   buildNumberColumn(column: string, domain?: [number, number]): NumberColumnBuilder
   ```
 - [buildCategoricalColumn](./main/docs/modules/_builder_column_categoricalcolumnbuilder_.html#buildcategoricalcolumn) returning a new [CategoricalColumnBuilder](./main/docs/classes/_builder_column_categoricalcolumnbuilder_.categoricalcolumnbuilder.html)
   ```typescript
   buildCategoricalColumn(column: string, categories?: (string | Partial<ICategory>)[]): CategoricalColumnBuilder
   ```
 - [buildHierarchicalColumn](./main/docs/modules/_builder_column_hierarchycolumnbuilder_.html#buildhierarchicalcolumn) returning a new [HierarchyColumnBuilder](./main/docs/classes/_builder_column_hierarchycolumnbuilder_.hierarchycolumnbuilder.html)
   ```typescript
   buildHierarchicalColumn(column: string, hierarchy?: IPartialCategoryNode): HierarchyColumnBuilder
   ```
 - [buildDateColumn](./main/docs/modules/_builder_column_datecolumnbuilder_.html#builddatecolumn) returning a new [DateColumnBuilder](./main/docs/classes/_builder_column_datecolumnbuilder_.datecolumnbuilder.html)
   ```typescript
   buildDateColumn(column: string): DateColumnBuilder
   ```
 - [buildActionsColumn]( ./main/docs/modules/_builder_column_actionscolumnbuilder_.html#buildactionscolumn) returning a new [ActionsColumnBuilder](./main/docs/classes/_builder_column_actionscolumnbuilder_.actionscolumnbuilder.html)
   ```typescript
   buildActionsColumn(): ActionsColumnBuilder
   ```


In order to build custom rankings within the `DataBuilder` the [buildRanking]( ./main/docs/modules/_builder_rankingbuilder_.html#buildranking) returning a new [RankingBuilder](./main/docs/classes/_builder_rankingbuilder_.rankingbuilder.html) is used.
```typescript
buildRanking(): RankingBuilder
```

### LineUp classes and manual creation

The relevant classes for creating a LineUp instance manually are [LineUp](./main/docs/classes/_ui_lineup_.lineup.html), [Taggle](./main/docs/classes/_ui_taggle_taggle_.taggle.html), and [LocalDataProvider](./main/docs/classes/_provider_localdataprovider_.localdataprovider.html). A `LocalDataProvider` is an sub class of `ADataProvider` implementing the data model management based on a local JavaScript array. `LineUp` and `Taggle` are the visual interfaces to the `LocalDataProvider`.

The classes can be instantiated either using the factory pattern or via their regular class constructors:

```typescript
createLineUp(container: HTMLElement, data: ADataProvider, config?: Partial<ILineUpOptions>): LineUp

createTaggle(container: HTMLElement, data: ADataProvider, config?: Partial<ITaggleOptions>): Taggle

createLocalDataProvider(data: any[], columns: IColumnDesc[], options?: Partial<ILocalDataProviderOptions>): LocalDataProvider
```
```typescript
new LineUp(node: HTMLElement, data: DataProvider, options?: Partial<ILineUpOptions>): LineUp
new Taggle(node: HTMLElement, data: DataProvider, options?: Partial<ITaggleOptions>): Taggle
new LocalDataProvider(data: any[], columns?: IColumnDesc[], options?: Partial<ILocalDataProviderOptions & IDataProviderOptions>): LocalDataProvider
```

Both `LineUp` and `Taggle` are sub classes of [ALineUp](./main/docs/classes/_ui_alineup_.alineup.html). The most important functions of this class include:

 - [`getHighlight(): number`](./main/docs/classes/_ui_alineup_.alineup.html#gethighlight) / [`setHighlight(dataIndex: number): void`](./main/docs/classes/_ui_alineup_.alineup.html#sethighlight)
   to get and set the highlighted row identified by its index in the data. If none is highlighted `-1` is returned.
 - [`getSelection(): number[]`](
./main/docs/classes/_ui_lineup_.lineup.html#getselection) / [`setSelection(dataIndices: number[]): void`](./main/docs/classes/_ui_alineup_.alineup.html#setselection)
   to get and set the selected rows identified by their indices in the data
 - [`on(type: string, listener: IEventListener | null): this`](./main/docs/classes/_ui_alineup_.alineup.html#on) to listen to highlight and selection events. LineUp.js event mechanism is based on [d3 dispatch](https://github.com/d3/d3-dispatch), thus instead of and `off` method `null` is passed to disable listening to the event. The following events are sent out:
   - [`highlightChanged(dataIndex: number): void`](./main/docs/classes/_ui_alineup_.alineup.html#highlightchanged)
   - [`selectionChanged(dataIndices: number[]): void`](./main/docs/classes/_ui_alineup_.alineup.html#selectionchanged)
