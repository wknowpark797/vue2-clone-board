<template>
    <div>
        <p>글번호 : {{ detail.seq }}</p>
        <p>작성자 : {{ detail.writer }}</p>
        <p>제목 : {{ detail.title }}</p>
        <p>내용 : {{ detail.content }}</p>

        <button
            type="button"
            @click="onClickUpdate">
            수정
        </button>
        <button
            type="button"
            @click="onClickDelete">
            삭제
        </button>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'DetailComp',
        data() {
            return {
                seq: -1,
                detail: {}
            }
        },
        mounted() {
            this.seq = Number(this.$route.params.seq);
            this.detail = data.find(item => item.seq === this.seq);
        },
        methods: {
            onClickUpdate() {
                this.$router.push(`/create/${this.seq}`);
            },
            onClickDelete() {
                const index = data.findIndex(item => item.seq === this.seq);
                data.splice(index, 1);
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>