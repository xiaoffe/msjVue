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
                    console.log("max", maxWidth+" "+clientWidth)
                    if (!clientWidth) return
                    if (clientWidth >= maxWidth / 2) {
                        clientWidth = maxWidth / 2
                    }
                    if (clientWidth <= 600) {
                        clientWidth = 600
                    }
                    docEl.style.fontSize = 100 * (clientWidth / 1000 ) + 'px'

                }
            if (!doc.addEventListener) return
            recalc();
            win.addEventListener(resizeEvt, recalc, false)
        },

    },
    mounted() {
        this.remInit(document, window)
    }
}
</script>
