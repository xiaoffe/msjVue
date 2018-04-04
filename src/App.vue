<template>
  <div id="app">
    <!--<img src="./assets/rabbit.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app',
    methods: {
        remInit(doc, win) {
            let docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    let maxWidth = screen.width
                    let clientWidth = docEl.clientWidth
                    console.log("max", maxWidth + " " + clientWidth)
                    if (!clientWidth) return
                    //用的这么一个不靠谱的判断方式。来分辨pc、mobile
                    if (clientWidth >= maxWidth / 2) {
                        clientWidth = maxWidth / 2
                    }
                    if (clientWidth <= 320) {
                        clientWidth = 320
                    }
                    docEl.style.fontSize = 100 * (clientWidth / 1000 ) + 'px'

                }
            if (!doc.addEventListener) return
            recalc();
            win.addEventListener(resizeEvt, recalc, false)
        },
        initFontSize(){
            let maxWidth = screen.width
            let clientWidth = document.documentElement.clientWidth
            console.log("max", maxWidth+" "+clientWidth)
            if (!clientWidth) return
            //用的这么一个不靠谱的判断方式。来分辨pc、mobile
            if(maxWidth>980){
                //pc
                clientWidth=maxWidth/2
            }else{
                //mobile
                clientWidth=980
            }

            document.documentElement.style.fontSize = 100 * (clientWidth / 1000 ) + 'px'
        }
    },
    mounted() {
//        this.remInit(document, window)
        //发现要实现模拟效果。并不需要监听屏幕大小变化。

        this.initFontSize();
    }
}
</script>
