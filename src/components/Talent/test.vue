<template>
    <div class="dragger">
        <span class="n-dragger">中</span>
        <span class="ne-dragger">华</span>
        <span class="e-dragger">一</span>
        <span class="se-dragger">番</span>
        <span class="s-dragger">中</span>
        <span class="sw-dragger">华</span>
        <span class="w-dragger">一</span>
        <span class="nw-dragger">番</span>
        <slot>
            暂无内容
        </slot>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                message: '美食达人'
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../sass/components/talent/talent_test";

</style>