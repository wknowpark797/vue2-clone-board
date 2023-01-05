<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>작성자</th>
                    <th>글제목</th>
                    <th>글내용</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="item in data"
                    :key="item.seq">
                    <td>{{ item.writer }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.content }}</td>
                </tr>
            </tbody>
        </table>

        <button 
            type="button">
            글쓰기
        </button>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'ReadComp',
        data() {
            return {
                data: data
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    th, td {
        padding: 5px;
    }
</style>