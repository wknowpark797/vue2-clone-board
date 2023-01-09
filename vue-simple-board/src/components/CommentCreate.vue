<template>
    <div class="comment-create">
        <p>{{ userName }}</p>

        <v-textarea
            v-model="params.comment"
            placeholder="댓글 내용을 입력해주세요."
            solo />

        <v-btn
            elevation="2"
            color="success"
            @click="isSubComment ? onClickSubCreate() : onClickCreate()">
            작성하기
        </v-btn>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'CommentCreate',
        props: {
            contentId: Number,
            loadCommentList: Function,
            isSubComment: Boolean,
            commentId: Number,
            loadSubCommentList: Function,
            subCommentToggle: Function
        },
        data() {
            return {
                params: {
                    comment: ''
                },
                userName: '신짱구'
            }
        },
        mounted() {
            
        },
        methods: {
            onClickCreate() {
                const lastComment = data.Comment.sort((a, b) => { return b.commentId - a.commentId })[0];
                const newId = lastComment.commentId + 1;
                
                data.Comment.push({
                    commentId: newId,
                    userId: 1,
                    contentId: this.contentId,
                    comment: this.params.comment,
                    createdAt: '2023-01-08 15:11:20',
                    updatedAt: null
                })
                this.loadCommentList();
                this.params.comment = '';
            },
            onClickSubCreate() {
                const lastComment = data.SubComment.sort((a, b) => { return b.subcommentId - a.subcommentId })[0];
                const newId = lastComment.subcommentId + 1;

                data.SubComment.push({
                    subcommentId: newId,
                    commentId: this.commentId,
                    userId: 1,
                    subcomment: this.params.comment,
                    createdAt: '2023-01-08 15:11:20',
                    updatedAt: null
                })
                this.subCommentToggle();
                this.loadSubCommentList();
                this.params.comment = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment-create {
        margin-top: 15px;
    }
</style>