if (!document.getElementById('targetBox')) {
    var targetBox = document.createElement('div');
    targetBox.id = 'targetBox';
    targetBox.style.cssText = 'width:22px;height:22px;border:1px solid red;border-radius:50%;background:rgba(255,0,0,0.1);position:fixed;transition:transform 0.23s;pointer-events:none;z-index:999999;';
    document.body.appendChild(targetBox);

    function targetBoxCursorMove(e) {
        document.getElementById('targetBox').style.top = (e.clientY - 10) + 'px';
        document.getElementById('targetBox').style.left = (e.clientX - 10) + 'px';
    }

    document.addEventListener('mousemove', targetBoxCursorMove);

    var style = document.createElement('style');
    style.id = 'targetStyles';
    style.appendChild(document.createTextNode('a, button {outline:1px dashed gray!important;outline-offset:-1px!important}'));
    document.head.appendChild(style);
}
else {
    document.getElementById('targetBox').remove();
    document.getElementById('targetStyles').remove();
    document.removeEventListener('mousemove', targetBoxCursorMove);
}
