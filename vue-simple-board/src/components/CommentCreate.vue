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
            @click="onClickCreate">
            작성하기
        </v-btn>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'CommentCreate',
        props: {
            contentId: Number
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
                const lastComment = data.Comment.sort((a, b) => b.commentId - a.commentId)[0];
                const newId = lastComment.commentId + 1;
                
                data.Comment.push({
                    commentId: newId,
                    userId: 1,
                    contentId: this.contentId,
                    comment: this.params.comment,
                    createdAt: '2023-01-08 15:11:20',
                    updatedAt: null
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comment-create {
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid #cacaca;
    }
</style>