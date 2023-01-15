<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">글번호</th>
                        <th class="text-left">제목</th>
                        <th class="text-left">작성일</th>
                        <th class="text-left">글쓴이</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in contentList"
                        :key="item.content_id"
                        @click="$router.push(`/board/detail/${item.content_id}`)">

                        <td>{{ item.content_id }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.user_name }}</td>
                    
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-btn 
            elevation="2"
            @click="$router.push('/board/create')">
            글쓰기
        </v-btn>
    </div>
</template>

<script>
    // import data from '@/data';
    import { findContentList } from '@/service';

    export default {
        name: 'BoardComp',
        computed: {
            /*contentList() {
                let items = data.Content.sort((a, b) => { return b.contentId - a.contentId });

                items = items.map(contentItem => {
                    return {
                        ...contentItem,
                        userName: data.User.find(userItem => userItem.userId === contentItem.userId).name
                    }
                })
                return items;
            }*/
        },
        data() {
            return {
                contentList: []
            }
        },
        async mounted() {
            const result = await findContentList();
            this.contentList = result.data;
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>