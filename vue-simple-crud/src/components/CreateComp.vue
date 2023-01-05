<template>
    <div>
        <input 
            type="text"
            v-model="params.writer"
            placeholder="작성자를 입력해주세요.">
        <input 
            type="text"
            v-model="params.title"
            placeholder="제목을 입력해주세요.">
        <textarea
            v-model="params.content"
            placeholder="내용을 입력해주세요." />

        <button 
            type="button"
            @click="isUpdate ? onClickUpdate() : onClickCreate()">
            {{ isUpdate ? '수정' : '작성' }}
        </button>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'CreateComp',
        data() {
            return {
                seq: -1,
                isUpdate: false,
                params: {
                    writer: '',
                    title: '',
                    content: ''
                }
            }
        },
        mounted() {
            if(this.$route.params.seq) {
                this.seq = Number(this.$route.params.seq);
                this.isUpdate = true;
                this.params = data.find(item => item.seq === this.seq);
            }
        },
        methods: {
            onClickCreate() {
                const newSeq = data[data.length - 1].seq + 1;
                data.push({
                    seq: newSeq,
                    writer: this.params.writer,
                    title: this.params.title,
                    content: this.params.content
                });
                this.$router.push('/');
            },
            onClickUpdate() {
                const index = data.findIndex(item => item.seq === this.seq);
                data[index] = this.params;
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    input, textarea {
        display: block;
        margin-bottom: 10px;
    }
</style>