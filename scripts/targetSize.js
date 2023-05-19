var targetBox = document.createElement('div');
targetBox.id = 'targetBox';
targetBox.style.cssText = 'width:22px;height:22px;border:1px dashed red;position:fixed;transition: transform 0.23s;pointer-events: none;';
document.body.appendChild(targetBox);

var sizeText = document.createElement('div');
sizeText.id = 'sizeText';
sizeText.style.cssText = 'font-size:10px;top:-18px;position:relative;';
sizeText.innerText = '24px';
targetBox.appendChild(sizeText);

document.addEventListener('mousemove', function(e){
    document.getElementById('targetBox').style.top = (e.clientY - 3) + 'px';
    document.getElementById('targetBox').style.left = (e.clientX + 10) + 'px';
});
