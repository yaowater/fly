// 作用：重置html的font-size

function resetRootFZ(){
    var oHtml = document.querySelector('html');
    var width = oHtml.getBoundingClientRect().width
    // 设置根字体的大小等于html节点的宽度的十分之一
    oHtml.style.fontSize = width/10 + 'px';
    console.log('root font size',oHtml.style.fontSize)
}
  
resetRootFZ()

// 当window窗口尺寸变化时，重新设置根字体的大小
window.addEventListener('resize',function(){
    resetRootFZ()
})
