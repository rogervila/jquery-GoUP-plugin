# jquery GoUP plugin

GoUP is a <2kb Scroll to Top jQuery plugin. It adds an arrow on the corner
that will scroll the page to the top when you clic on it. 

**TEST IT HERE** -> [jquerygoup.tk](https://jquerygoup.tk) 

I'ts compatible with:

 * Chrome 32+ (old versions not tested)
 * Firefox 3.5+
 * Opera 11
 * Internet Explorer 8+
 * Safari 5+ 
 * iOS 5
 * Android 2.3.6+
 * Windows Phone 7.8+

### HTML code:

```html
 <head>
    ...
    <script src='js/jquery.js'></script>
    <script src='js/jquery.goup.min.js'></script>
    <script src='js/yourfile.js'></script>
    ...
 </head>
 ...
 <body>
    ...
    ...
    ...
    <div id='goup'></div>
 </body>
```

### Jacascript Code:

```javascript
 $(document).ready(function(){
    $('#goup').goup();
    ...
    ...
 });
```

### Options:

```javascript
 $(document).ready(function(){
    $('#goup').goup({
       appear: 200,
       scrolltime: 800,
       imgsrc: 'http://goo.gl/VDOdQc',
       width: 72,
       place: 'bottom-right',
       fadein: 500,
       fadeout: 500,
       opacity: 0.5,
       marginX: 2,
       marginY: 2,
    });
    ...
    ...
 });
```


   * **appear**: 200, in pixels, distance from the top of the window in which the arrow appears
   * **scrolltime**: 800, in ms, duration from when the arrow is clicked until the scroll animation reaches the window top
   * **imgsrc**: 'http://goo.gl/VDOdQc', this is the default arrow. it's a 72x72 image. if you want to change the arrow, and the new has different size, you will have to change the width value
   * **width**: 72, in pixels, defines the arrow image width.
    place: 'bottom-right', it defines on wich screen corner the arrow will appear. those are the options: 'top-right', 'top-left', 'bottom-right', 'bottom-left'
   * **fadein**: 500, in ms, the duration of the fadein animation when the arrow appears
   * **fadeout**: 500, in ms, the duration of the fadeout animation when the arrow desappears
   * **opacity**: 0.5, this is the default opacity. When you hover the arrow, opacity value goes to 1
   * **marginX**: 2, in %, the left or right margin (deppending on place value)
   * **marginY**: 2, in %, the top or bottom margin (deppending on place value)


Read more at [jquerygoup.tk](https://jquerygoup.tk) 

follow me at [@_rogervila](https://twitter.com/_rogervila) 
