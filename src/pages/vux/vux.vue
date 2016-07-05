<template>
   vux{{name}}
    <div>
        <group>
            <cell title="vue" value="cool"></cell>
            <switch title="Toggle" :value.sync="show"></switch>
        </group>
        <alert :show.sync="show" title="asdss" button-text="ss">
            <p style="text-align:center;">we</p>
        </alert>
    </div>
</template>
<script>
    import Group from 'vux/dist/components/group'
    import Cell from 'vux/dist/components/cell'
    import Switch from 'vux/dist/components/switch'
    import Alert from 'vux/dist/components/alert'
    export default {
        components: {
            Group,
            Cell,
            Switch,
            Alert
        },
        data:function(){
            return {
                name:"aa",
                show: false
            }
        }
    }
</script>
<style>
    @import '~vux/dist/vux.css';
</style>