<template>
    <div>
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col>{{ contentId }}</v-col>
                    <v-col>{{ contentDetail.title }}</v-col>
                    <v-col>
                        글쓴이 : {{ userName }}
                        <br>등록일 : {{ contentDetail.createdAt }}
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="content-wrap">
            {{ contentDetail.content }}
        </v-card>

        <v-btn 
            elevation="2"
            color="primary"
            @click="$router.push(`/board/create/${contentId}`)">
            수정
        </v-btn>
        <v-btn 
            elevation="2"
            color="error"
            @click="onClickDelete">
            삭제
        </v-btn>

        <v-card 
            class="comment-wrap"
            color="#eee">
            댓글 영역
        </v-card>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'DetailComp',
        data() {
            return {
                contentId: -1,
                contentDetail: {},
                userName: ''
            }
        },
        mounted() {
            this.contentId = Number(this.$route.params.contentId);
            this.contentDetail = data.Content.find(item => item.contentId === this.contentId);
            this.userName = data.User.find(item => item.userId === this.contentDetail.userId).name;
        },
        methods: {
            onClickDelete() {
                const index = data.Content.findIndex(item => item.contentId === this.contentId);
                data.Content.splice(index, 1);
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content-wrap {
        padding: 20px;
        margin: 20px 0;
    }
    .v-btn {
        margin-right: 10px;
    }
    .comment-wrap {
        padding: 20px;
        margin-top: 20px;
    }
</style>