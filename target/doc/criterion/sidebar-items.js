initSidebarItems({"enum":[["AxisScale","Axis scaling type"],["Baseline","Baseline describes how the baseline_directory is handled."],["BatchSize","Argument to `Bencher::iter_batched` and `Bencher::iter_batched_ref` which controls the batch size."],["PlottingBackend","Enum used to select the plotting backend."],["SamplingMode","This enum allows the user to control how Criterion.rs chooses the iteration count when sampling. The default is Auto, which will choose a method automatically based on the iteration time during the warm-up phase."],["Throughput","Enum representing different ways of measuring the throughput of benchmarked code. If the throughput setting is configured for a benchmark then the estimated throughput will be reported as well as the time per iteration."]],"fn":[["black_box","A function that is opaque to the optimizer, used to prevent the compiler from optimizing away computations in a benchmark."]],"macro":[["criterion_group","Macro used to define a function group for the benchmark harness; see the `criterion_main!` macro for more details."],["criterion_main","Macro which expands to a benchmark harness."]],"mod":[["async_executor","This module defines a trait that can be used to plug in different Futures executors into Criterion.rs’ async benchmarking support."],["measurement","This module defines a set of traits that can be used to plug different measurements (eg. Unix’s Processor Time, CPU or GPU performance counters, etc.) into Criterion.rs. It also includes the WallTime struct which defines the default wall-clock time measurement."],["profiler","This module provides an extension trait which allows in-process profilers to be hooked into the `--profile-time` argument at compile-time. Users of out-of-process profilers such as perf don’t need to do anything special."]],"struct":[["Bencher","Timer struct used to iterate a benchmarked function and measure the runtime."],["BenchmarkGroup","Structure used to group together a set of related benchmarks, along with custom configuration settings for groups of benchmarks. All benchmarks performed using a benchmark group will be grouped together in the final report."],["BenchmarkId","Simple structure representing an ID for a benchmark. The ID must be unique within a benchmark group."],["Criterion","The benchmark manager"],["PlotConfiguration","Contains the configuration options for the plots generated by a particular benchmark or benchmark group."]]});