<template>
    <div>
        <div 
            v-for="item in commentList"
            :key="item.comment_id">

            <CommentItem :comment="item" />

        </div>

        <CommentCreate 
            :contentId="contentId"
            :loadCommentList="loadCommentList" />
    </div>
</template>

<script>
    // import data from '@/data';
    import CommentItem from '@/components/CommentItem';
    import CommentCreate from '@/components/CommentCreate';
    import { findComment } from '@/service';

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
            async loadCommentList() {
                // this.commentList = data.Comment.filter(item => item.contentId === this.contentId);
                const result = await findComment({
                    contentId: this.contentId
                });
                this.commentList = result.data;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>