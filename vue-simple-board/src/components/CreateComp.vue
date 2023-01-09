<template>
    <div>
        <v-form ref="form">

            <v-text-field
                v-model="params.title"
                placeholder="제목을 입력해주세요."
                solo />

            <v-textarea
                v-model="params.content"
                placeholder="내용을 입력해주세요."
                solo />

            <v-btn
                elevation="2"
                color="success"
                @click="isUpdate ? onClickUpdate() : onClickCreate()">
                {{ isUpdate ? '수정' : '저장' }}
            </v-btn>
            <v-btn
                elevation="2"
                color="error"
                @click="$router.push('/')">
                취소
            </v-btn>

        </v-form>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'CreateComp',
        data() {
            return {
                params: {
                    title: '',
                    content: ''
                },

                isUpdate: false,
                contentId: -1
            }
        },
        mounted() {
            if(this.$route.params.contentId) {
                this.contentId = Number(this.$route.params.contentId);
                this.isUpdate = true;

                this.params = data.Content.find(item => item.contentId === this.contentId);
            }
        },
        methods: {
            onClickCreate() {
                const lastContent = data.Content.sort((a, b) => { return b.contentId - a.contentId })[0];
                const newId = lastContent.contentId + 1;

                data.Content.push({
                    contentId: newId,
                    userId: 1,
                    title: this.params.title,
                    content : this.params.content,
                    createdAt: '2023-01-08 13:11:20',
                    updatedAt: null
                })

                this.$router.push('/');
            },
            onClickUpdate() {
                const item = data.Content.find(item => item.contentId === this.contentId);
                item.title = this.params.title;
                item.content = this.params.content;

                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-btn {
        margin-right: 10px;
    }
</style>