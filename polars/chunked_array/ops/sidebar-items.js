window.SIDEBAR_ITEMS = {"enum":[["FillNullStrategy",""],["TakeIdx","One of the three arguments allowed in unchecked_take"],["TakeRandBranch2",""],["TakeRandBranch3",""]],"mod":[["full",""],["zip",""]],"struct":[["BoolTakeRandom",""],["BoolTakeRandomSingleChunk",""],["ListTakeRandom",""],["ListTakeRandomSingleChunk",""],["NumTakeRandomChunked",""],["NumTakeRandomCont",""],["NumTakeRandomSingleChunk",""],["ObjectTakeRandom",""],["ObjectTakeRandomSingleChunk",""],["SortOptions",""],["TakeRandomBitmap",""],["Utf8TakeRandom",""],["Utf8TakeRandomSingleChunk",""]],"trait":[["ArgAgg","Argmin/ Argmax"],["ChunkAgg","Aggregation operations"],["ChunkAnyValue",""],["ChunkApply","Fastest way to do elementwise operations on a ChunkedArray when the operation is cheaper than branching due to null checking"],["ChunkApplyKernel","Apply kernels on the arrow array chunks in a ChunkedArray."],["ChunkBytes",""],["ChunkCast","Cast `ChunkedArray<T>` to `ChunkedArray<N>`"],["ChunkCompare","Compare Series and ChunkedArray’s and get a `boolean` mask that can be used to filter rows."],["ChunkCumAgg",""],["ChunkExpandAtIndex","Create a new ChunkedArray filled with values at that index."],["ChunkExplode","Explode/ flatten a List or Utf8 Series"],["ChunkFillNull","Replace None values with various strategies"],["ChunkFillNullValue","Replace None values with a value"],["ChunkFilter","Filter values by a boolean mask."],["ChunkFull","Fill a ChunkedArray with one value."],["ChunkFullNull",""],["ChunkLen",""],["ChunkOps",""],["ChunkPeaks","Find local minima/ maxima"],["ChunkQuantile","Quantile and median aggregation"],["ChunkReverse","Reverse a ChunkedArray"],["ChunkRollApply","This differs from ChunkWindowCustom and ChunkWindow by not using a fold aggregator, but reusing a `Series` wrapper and calling `Series` aggregators. This likely is a bit slower than ChunkWindow"],["ChunkSet","Create a `ChunkedArray` with new values by index or by boolean mask. Note that these operations clone data. This is however the only way we can modify at mask or index level as the underlying Arrow arrays are immutable."],["ChunkShift",""],["ChunkShiftFill","Shift the values of a ChunkedArray by a number of periods."],["ChunkSort","Sort operations on `ChunkedArray`."],["ChunkTake","Fast access by index."],["ChunkTakeEvery","Traverse and collect every nth element"],["ChunkUnique","Get unique values in a `ChunkedArray`"],["ChunkVar","Variance and standard deviation aggregation."],["ChunkZip","Combine 2 ChunkedArrays based on some predicate."],["Interpolate",""],["IntoTakeRandom","Create a type that implements a faster `TakeRandom`."],["IsFirst","Mask the first unique values as `true`"],["IsIn","Check if element is member of list array"],["IsLast","Mask the last unique values as `true`"],["RepeatBy","Repeat the values `n` times."],["StrConcat","Concat the values into a string array."],["TakeIterator",""],["TakeIteratorNulls",""],["TakeRandom","Random access"],["TakeRandomUtf8",""]],"type":[["Dummy","Dummy type, we need to instantiate all generic types, so we fill one with a dummy."],["FillNullLimit",""]]};