import { defineConfig } from "vuepress/config"

export default defineConfig({
  title:"typechallenges",
  description:"type challenges",
  themeConfig:{
    sidebar:[
      {
        title:"开始",
        path:"/"
      },
      {
        title:"简单",
        children:[
          "/easy/04-pick",
          "/easy/07-readonly",
          "/easy/11-tuple-to-Object",
          "/easy/14-first-of-array",
          "/easy/18-length-of-tuple",
          "/easy/43-exclude",
          "/easy/189-awaited",
          "/easy/268-if",
          "/easy/533-concat",
          "/easy/898-includes",
          "/easy/3057-push",
          "/easy/3060-unshift",
          "/easy/3312-parameters"
        ]
      },
      {
        title:"中等",
        children:[
          "/medium/02-get-return-type",
          "/medium/03-omit",
          "/medium/08-readonly-2",
          "/medium/09-deep-readonly",
          "/medium/10-tuple-to-union",
          "/medium/12-chainable-options",
          "/medium/15-last-of-array",
          "/medium/16-pop",
          "/medium/20-promise.all",
          "/medium/62-type-lookup",
          "/medium/106-trim-left",
          "/medium/108-trim",
          "/medium/110-capitalize",
          "/medium/116-replace",
          "/medium/119-replaceAll",
          "/medium/191-append-argument",
          "/medium/296-permutaion",
          "/medium/298-length-of-string",
          "/medium/459-flatten",
          "/medium/527-append-to-object",
          "/medium/529-absolute",
          "/medium/531-string-to-union",
          "/medium/599-merge",
          "/medium/612-kebabcase",
          "/medium/645-diff",
          "/medium/949-anyof",
          "/medium/1042-isnever",
          "/medium/1097-isunion",
          "/medium/1130-replacekeys",
          "/medium/1367-remove-index-signature",
          "/medium/1978-percentage-parser",
          "/medium/2070-drop-char",
          "/medium/2257-minusone",
          "/medium/2595-pickbytype",
          "/medium/2688-startswith",
          "/medium/2693-endswith",
          "/medium/2757-partialbykeys",
          "/medium/2759-requiredbykeys",
          "/medium/2793-mutable",
          "/medium/2852-omitbytype",
          "/medium/2946-Objectentries",
          "/medium/3062-shift",
          "/medium/3188-tuple-to-nested-Object",
          "/medium/3192-reverse",
          "/medium/3196-fliparguments",
          "/medium/3243-flattenDepth",
          "/medium/3326-BEW-style-string",
          "/medium/3376-inorderTraversal",
          "/medium/4179-flip",
          "/medium/4182-fibonacci-sequence",
          "/medium/4260-allCombinations",
          "/medium/4425-greater-than",
          "/medium/4471-zip",
          "/medium/4484-isTuple",
          "/medium/4499-chunk",
          "/medium/4518-fill",
          "/medium/4803-trim-right",
          "/medium/5117-without",
          "/medium/5140-trunc",
          "/medium/5153-indexOf",
          "/medium/5310-join",
          "/medium/5317-lastIndexOf",
          "/medium/5360-unique",
          "/medium/5821-mapTypes",
          "/medium/7544-construct-tuple",
          "/medium/8640-number-range",
          "/medium/8767-combination",
          "/medium/8987-subsequence",
          "/medium/9142-checkRepeatedChars",
          "/medium/9286-firstUniqueCharIndex",
          "/medium/9616-parse-url-params",
          "/medium/9896-getMiddleElement",
          "/medium/9898-appear-only-once",
          "/medium/9989-count-element-number-to-Object",
          "/medium/10969-Integer",
          "/medium/16259-toPrimitive",
          "/medium/17973-deepMutable",
          "/medium/18142-all",
          "/medium/18220-filter",
          "/medium/21104-findAll",
          "/medium/21106-combination-key-type",
          "/medium/21220-permutations-of-tuple",
          "/medium/25170-replace-first",
          "/medium/25270-transpose",
          "/medium/26401-json-schema-to-typeScript",
          "/medium/27133-square",
          "/medium/27152-triangular-number",
          "/medium/27862-acrtesianProduct",
          "/medium/27932-mergeAll",
          "/medium/27958-checkRepeatedTuple",
          "/medium/28333-public-type",
          "/medium/29650-extracToObject",
          "/medium/29785-deep-omit",
          "/medium/30301-isodd",
          "/medium/30430-tower-of-hanoi",
        ]
      }
    ],
    lastUpdated:"最后更新时间"
  }
})