(function() {

// Cache for local use
var isArray = Array.isArray;


var total = 2000;
var count = 0;
var samples_array = [];
var div = document.createElement('div');


var low, high, diff, mean, previous_ts;

low = 9999;
high = 0;
mean = 0;


var orientationchange = function (event){
  if (!previous_ts) {
    previous_ts = +new Date();
    return;
  }

  // Current timestamp
  var current_ts = +new Date();

  // Difference of the last and current time the event tick
  diff = current_ts - previous_ts;

  // previous = current
  previous_ts = current_ts;

  // Collecting data to get the mean
  samples_array[count] = [count, diff];

  count += 1;

  if (count == total) {

    // Unbind when done
    unbindEvent();

    $.jqplot('graph',  [samples_array]);

    mean = samples_array.reduce(function(sum, curr){
      var c = curr[1]

      // Finding the lowest and highest
      c < low  && (low  = c);
      c > high && (high = c);

      if (isArray(sum)) {
        return sum[1] + c;
      } else {
        return sum + c;
      }
    });

    mean /= samples_array.length;

    div.innerHTML =
      'low: '  + low  + '<br />' +
      'high: ' + high + '<br />' +
      'mean: ' + mean + '<br />' +
      'data: [' + samples_array.join(',') + ']';

    document.body.appendChild(div);

    // Benchmark done!
    return;
  }
}


var bindEvent = function() {
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', orientationchange, false);
  } if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', orientationchange, false);
  } else if (window.OrientationEvent) {
    alert('Support OrientationEvent, not not coded...');
  } else {
    alert('Not supported');
  }
}


var unbindEvent = function() {
  if (window.DeviceMotionEvent) {
    // Firefox 9, 10, 11
    window.removeEventListener('devicemotion', orientationchange, false);
  } if (window.DeviceOrientationEvent) {
    // Chrome
    window.removeEventListener('deviceorientation', orientationchange, false);
  } else if (window.OrientationEvent) {
    alert('Support OrientationEvent, not not coded...');
  } else {
    alert('Not supported');
  }
}

bindEvent();
  
})();