import { build, buildCategorical, buildDate, buildHierarchy, buildNumber, buildString, buildActions } from './column';
import { Adapter } from './lineup';
import { buildAllColumnsRanking, buildGeneric, buildImposeRanking, buildNestedRanking, buildRanking, buildReduceRanking, buildScriptRanking, buildSupportRanking, buildWeightedSumRanking } from './ranking';
import { isSame, isTypeInstance } from './utils';
export declare const builderAdapter: {
    buildString: typeof buildString;
    buildNumber: typeof buildNumber;
    buildHierarchy: typeof buildHierarchy;
    buildDate: typeof buildDate;
    buildCategorical: typeof buildCategorical;
    buildActions: typeof buildActions;
    build: typeof build;
    buildGeneric: typeof buildGeneric;
    buildWeightedSumRanking: typeof buildWeightedSumRanking;
    buildSupportRanking: typeof buildSupportRanking;
    buildScriptRanking: typeof buildScriptRanking;
    buildReduceRanking: typeof buildReduceRanking;
    buildRanking: typeof buildRanking;
    buildNestedRanking: typeof buildNestedRanking;
    buildImposeRanking: typeof buildImposeRanking;
    buildAllColumnsRanking: typeof buildAllColumnsRanking;
    equal: (a: any, b: any) => boolean;
    isSame: typeof isSame;
    isTypeInstance: typeof isTypeInstance;
    Adapter: typeof Adapter;
};
