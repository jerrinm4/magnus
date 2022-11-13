function just(time){
  return (time<10)?"0"+time:time;
}
(function ($) {
  "use strict";
  $(document).ready(function () {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let birthday = "Dec 6, 2022 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          let now = new Date().getTime(),
            distance = countDown - now;
            // "&nbsp;&nbsp;"
          if (distance > 0) {
            document.getElementById("days").innerHTML =
              just(Math.floor(distance / day)) ;
            document.getElementById("hours").innerHTML =
            just(Math.floor((distance % day) / hour)) ;
            document.getElementById("minutes").innerHTML =
            just(Math.floor((distance % hour) / minute)) ;
            document.getElementById("seconds").innerHTML = just(Math.floor(
              (distance % minute) / second
            ));
          }
          //do something later when date is reached
          else {
            document.getElementById("days").innerHTML =
              "🌃";
            document.getElementById("hours").innerHTML =
            "🌃";
            document.getElementById("minutes").innerHTML =
            "🌃";
            document.getElementById("seconds").innerHTML = 
                "🌃";
          }
          //seconds
        }, 0);
    })();
  });
})(jQuery);
