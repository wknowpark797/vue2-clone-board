<template>
    <div>
        <p>글번호 : {{ detail.seq }}</p>
        <p>작성자 : {{ detail.writer }}</p>
        <p>제목 : {{ detail.title }}</p>
        <p>내용 : {{ detail.content }}</p>

        <button
            type="button">
            수정
        </button>
        <button
            type="button">
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
            
        }
    }
</script>

<style scoped>

</style>