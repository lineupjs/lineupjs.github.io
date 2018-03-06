/// <reference types="react" />
import * as React from 'react';
export declare class ChildWrapper<T, P> {
    readonly props: P;
    readonly type: any;
    constructor(props: P, type: any);
    create(): T;
}
export declare function filterChildrenProps<T, P = any>(children: React.ReactNode, clazz: any): ChildWrapper<T, P>[];
