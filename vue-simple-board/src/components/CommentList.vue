<template>
    <div>
        <div 
            v-for="item in commentList"
            :key="item.commentId">

            <CommentItem :comment="item" />

        </div>
    </div>
</template>

<script>
    import data from '@/data';
    import CommentItem from '@/components/CommentItem';

    export default {
        name: 'CommentList',
        components: {
            CommentItem
        },
        props: {
            contentId: Number
        },
        data() {
            return {
                commentList: []
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.commentList = data.Comment.filter(item => item.contentId === this.contentId);
            })
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>