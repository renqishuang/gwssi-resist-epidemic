<template>
    <div class="default_box_container" :style="{height:height}">
        <h3>
            <div>
                <img :src="src">
                <span>{{title}}</span>
            </div>
            <a v-show="hasMore" @click.prevent="moreHandler" href="">更多</a>
        </h3>
        <div class="content"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name:'defaultBox',
    props:{
        hasMore:{
            type:Boolean,
            default:function(){
                return true
            }
        },
        title:{
            type:String,
            default:''
        },
        src:{
            type:String,
            default:''
        },
        height:{
            type:String,
            default:'0.43rem'
        }
    },
    methods:{
        moreHandler(){
            this.$emit('toMore')
        }
    }
}
</script>

<style lang="stylus">
.default_box_container
    background-color #fff
    margin-bottom 0.2rem
    .content
        margin 0.2rem
        height calc(100% - 0.43rem - 0.4rem)
    h3
        height 0.43rem
        line-height 0.43rem
        margin 0 0.20rem
        border-bottom 1px solid #c2c6cc
        box-sizing border-box
        a
            float right
            font-size 0.14rem
            color #666
            line-height 0.43rem
            text-decoration none
            &:hover
                color #080808
        div
            position relative
            display inline-block
            &:after
                content ''
                position absolute
                width 100%
                bottom 1px
                left 0
                display block
                border-top 3px solid #3385ff
            span
                font-family 'MicrosoftYaHei'
                font-size 0.16rem
                line-height 0.43rem
                vertical-align middle
                color #333333
                font-weight bold
            img 
                width 0.16rem
                height 0.16rem
                vertical-align middle
                margin-right 4px
</style>
