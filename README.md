# target-size

A simple tool that adds a 24px circle under the cursor and outlines basic interactive elements on a page.

## Chrome plugin

Download this repository.

Add to Chrome as a local extension:

Chrome --> Settings --> Extensions

Turn on Developer mode (located at the top right of the page)

Click 'Load unpacked' (top left of the page) and select the folder containing this repository.

Toggle the extension on and off in the toolbar.


## Bookmarklet

Create a bookmark and paste following code as the url:

```javascript
javascript:(()=>
{function targetBoxCursorMove(e){document.getElementById("targetBox").style.top=e.clientY-10+"px",document.getElementById("targetBox").style.left=e.clientX-10+"px"}var targetBox,style;document.getElementById("targetBox")?(document.getElementById("targetBox").remove(),document.getElementById("targetStyles").remove(),document.removeEventListener("mousemove",targetBoxCursorMove)):((targetBox=document.createElement("div")).id="targetBox",targetBox.style.cssText="width:22px;height:22px;border:1px solid red;border-radius:50%;background:rgba(255,0,0,0.1);position:fixed;transition:transform 0.23s;pointer-events:none;z-index:999999;",document.body.appendChild(targetBox),document.addEventListener("mousemove",targetBoxCursorMove),(style=document.createElement("style")).id="targetStyles",style.appendChild(document.createTextNode("a, button {outline:1px dashed gray!important;outline-offset:-1px!important}")),document.head.appendChild(style))}
)();
```
