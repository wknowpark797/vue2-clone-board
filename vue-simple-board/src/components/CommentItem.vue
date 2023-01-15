<template>
    <div>
        <v-row>
            <v-col>
                {{ comment.user_name }}
                <br>{{ comment.created_at }}
            </v-col>
            <v-col>
                {{ comment.comment }}
            </v-col>
            <v-col>
                <v-btn 
                    elevation="2"
                    small>
                    수정
                </v-btn>
                <v-btn 
                    elevation="2"
                    small>
                    삭제
                </v-btn>
                <v-btn 
                    elevation="2"
                    small
                    @click="subCommentToggle">
                    댓글 달기
                </v-btn>
            </v-col>
        </v-row>
        <div
            class="sub-create-wrap" 
            v-if="subCommentCreateToggle">
            <CommentCreate 
                :isSubComment="true"
                :commentId="comment.comment_id"
                :loadSubCommentList="loadSubCommentList"
                :subCommentToggle="subCommentToggle" />
        </div>

        <div 
            class="sub-comment-wrap" 
            v-if="subCommentList.length > 0">
            <v-row 
                v-for="sub in subCommentList"
                :key="sub.sub_comment_id">
                <v-col>
                    {{ sub.user_name }}
                    <br>{{ sub.created_at }}
                </v-col>
                <v-col>
                    {{ sub.sub_comment }}
                </v-col>
                <v-col>
                    <v-btn 
                        elevation="2"
                        small>
                        수정
                    </v-btn>
                    <v-btn 
                        elevation="2"
                        small>
                        삭제
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    // import data from '@/data';
    import CommentCreate from '@/components/CommentCreate';
    import { findSubComment } from '@/service';

    export default {
        name: 'CommentItem',
        components: {
            CommentCreate
        },
        props: {
            comment: Object
        },
        data() {
            return {
                subCommentList: [],
                subCommentCreateToggle: false
            }
        },
        mounted() {
            // this.userName = data.User.find(item => item.userId === this.comment.userId).name;
            this.loadSubCommentList();
        },
        methods: {
            subCommentToggle() {
                this.subCommentCreateToggle = !this.subCommentCreateToggle;
            },
            async loadSubCommentList() {
                /*this.subCommentList = data.SubComment.filter(
                    item => item.commentId === this.comment.commentId
                ).map(subCommentItem => {
                    return {
                        ...subCommentItem,
                        userName: data.User.find(userItem => userItem.userId === subCommentItem.userId).name
                    }
                })*/

                const result = await findSubComment({
                    commentId: this.comment.comment_id
                });
                this.subCommentList = result.data;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-btn {
        margin-right: 10px;
    }
    .sub-comment-wrap {
        background: #c7c7c7;
        padding: 15px;
        margin: 10px 15px 15px;
    }
    .sub-create-wrap {
        background: #c7c7c7;
        padding: 15px;
        margin: 10px 15px 15px;
    }
</style>