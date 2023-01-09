<template>
    <div>
        <div 
            v-for="item in commentList"
            :key="item.commentId">

            <CommentItem :comment="item" />

        </div>

        <CommentCreate 
            :contentId="contentId"
            :loadCommentList="loadCommentList" />
    </div>
</template>

<script>
    import data from '@/data';
    import CommentItem from '@/components/CommentItem';
    import CommentCreate from '@/components/CommentCreate';

    export default {
        name: 'CommentList',
        components: {
            CommentItem,
            CommentCreate
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
                this.loadCommentList();
            })
        },
        methods: {
            loadCommentList() {
                this.commentList = data.Comment.filter(item => item.contentId === this.contentId);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>