# Device Orientation Benchmark

This project is created to test the interval of 
Device Orientation fire for each browser tick.

Here is some of the details for the setup of the test:

- Collect 2000 samples of event triggered
- Calculate the highest, lowest and mean from the samples collected

## Results

Below is the statistics I get after I ran the benchmark
on Chrome and Firefox. Other desktop browsers seem doesn't
support the Device Orientation event at the moment.

In Chrome, we can get a mean of 122ms per event call.
The interval for the event call for Chrome is quite 
unstable where by looking at the graph generated from 
the data I get, I can see that it's constantly triggering
the event at ~200ms and ~300ms occasionally.

On the other hand for Firefox, the mean that I got for
the event triggering interval is about 53ms. The event
triggering is quite consistent compare to the stats I got
from Chrome.

One weird thing I find out is that both Chrome and Firefox
sometimes takes a very long time for certain ticks where it
can go up to more than 1000ms, I assume it's when the
garbage collector kicks in and block all the thread that is
running. Hope someone can explain the behavior I see here 
in details.

## Samples collected

### Chrome
- low: 86ms
- high: 527ms
- mean: 122.567ms

### Canary
- low: 92ms
- high: 517ms
- mean: 122.0115ms

### Firefox 9 Stable
- low: 46ms
- high: 108ms
- mean: 53.052ms

### Firefox 10 Beta
- low: 46ms
- high: 101ms
- mean: 53.0175ms

### Firefox Aurora
- low: 42ms
- high: 174ms
- mean: 53.19ms

## MIT License
Copyright (c) 2011 Tan Shiaw Uen &lt;shiawuen@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.