---
title: API Documentation
layout: page
menu: bar
---

LineUp is implemented in clean TypeScript in an object oriented manner. A fully generated API documentation based on [TypeDoc](http://typedoc.org) is available at [https://lineup.js.org/main/docs](https://lineup.js.org/main/docs).

LineUp can be build manually or using via the builder design pattern (see [Advanced Usage Example](./getting-started)). The builder design pattern in the more common way.

### LineUp Builder

The simplest methods to create a new instance are:
 - [asLineUp](./main/docs/functions/asLineUp.html) returning a ready to use [LineUp](./main/docs/classes/LineUp.html) instance
   ```typescript
   asLineUp(node: HTMLElement, data: any[], ...columns: string[]): LineUp
   ```
 - [asTaggle](./main/docs/functions/asTaggle.html) returning a ready to use [Taggle](./main/docs/classes/Taggle.html) instance
   ```typescript
   asTaggle(node: HTMLElement, data: any[], ...columns: string[]): Taggle
   ```
 - [builder](./main/docs/functions/builder.html) returning a new [DataBuilder](./main/docs/classes/DataBuilder.html)
    ```typescript
    builder(arr: any[]): DataBuilder`
    ```

The `DataBuilder` allows on the one hand to specify the individual columns more specificly and the creation of custom rankings.

Builder factory functions for creating column descriptions include:
 - [buildStringColumn](./main/docs/functions/buildStringColumn) returning a new [StringColumnBuilder](./main/docs/classes/StringColumnBuilder.html)
   ```typescript
   buildStringColumn(column: string): StringColumnBuilder
   ```
 - [buildNumberColumn](./main/docs/docs/functions/buildNumberColumn.html) returning a new [NumberColumnBuilder](./main/docs/classes/NumberColumnBuilder.html)
   ```typescript
   buildNumberColumn(column: string, domain?: [number, number]): NumberColumnBuilder
   ```
 - [buildCategoricalColumn](./main/docs/functions/buildCategoricalColumn.html) returning a new [CategoricalColumnBuilder](./main/docs/classes/CategoricalColumnBuilder.html)
   ```typescript
   buildCategoricalColumn(column: string, categories?: (string | Partial<ICategory>)[]): CategoricalColumnBuilder
   ```
 - [buildHierarchicalColumn](./main/docs/functions/buildHierarchicalColumn.html) returning a new [HierarchyColumnBuilder](./main/docs/classes/buildHierarchicalColumn.html)
   ```typescript
   buildHierarchicalColumn(column: string, hierarchy?: IPartialCategoryNode): HierarchyColumnBuilder
   ```
 - [buildDateColumn](./main/docs/functions/buildDateColumn.html) returning a new [DateColumnBuilder](./main/docs/classes/DateColumnBuilder.html)
   ```typescript
   buildDateColumn(column: string): DateColumnBuilder
   ```
 - [buildActionsColumn]( ./main/docs/functions/buildActionsColumn.html) returning a new [ActionsColumnBuilder](./main/docs/classes/ActionsColumnBuilder.html)
   ```typescript
   buildActionsColumn(): ActionsColumnBuilder
   ```


In order to build custom rankings within the `DataBuilder` the [buildRanking]( ./main/docs/functions/buildRanking.html) returning a new [RankingBuilder](./main/docs/classes/RankingBuilder.html) is used.
```typescript
buildRanking(): RankingBuilder
```

### LineUp classes and manual creation

The relevant classes for creating a LineUp instance manually are [LineUp](./main/docs/classes/LineUp.html), [Taggle](./main/docs/classes/Taggle.html), and [LocalDataProvider](./main/docs/classes/LocalDataProvider.html). A `LocalDataProvider` is an sub class of `ADataProvider` implementing the data model management based on a local JavaScript array. `LineUp` and `Taggle` are the visual interfaces to the `LocalDataProvider`.

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

Both `LineUp` and `Taggle` are sub classes of [ALineUp](./main/docs/classes/ALineUp.html). The most important functions of this class include:

 - [`getHighlight(): number`](./main/docs/classes/ALineUp.html#getHighlight) / [`setHighlight(dataIndex: number): void`](./main/docs/classes/ALineUp.html#sethighlight)
   to get and set the highlighted row identified by its index in the data. If none is highlighted `-1` is returned.
 - [`getSelection(): number[]`](
./main/docs/classes/ALineUp.html#getselection) / [`setSelection(dataIndices: number[]): void`](./main/docs/classes/ALineUp.html#setselection)
   to get and set the selected rows identified by their indices in the data
 - [`on(type: string, listener: IEventListener | null): this`](./main/docs/classes/ALineUp.html#on) to listen to highlight and selection events. LineUp.js event mechanism is based on [d3 dispatch](https://github.com/d3/d3-dispatch), thus instead of and `off` method `null` is passed to disable listening to the event. The following events are sent out:
   - [`highlightChanged(dataIndex: number): void`](./main/docs/classes/ALineUp.html#EVENT_HIGHLIGHT_CHANGED)
   - [`selectionChanged(dataIndices: number[]): void`](./main/docs/classes/ALineUp.html#EVENT_SELECTION_CHANGED)
