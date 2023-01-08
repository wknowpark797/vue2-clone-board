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
                        :key="item.contentId"
                        @click="$router.push(`/board/detail/${item.contentId}`)">

                        <td>{{ item.contentId }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.createdAt }}</td>
                        <td>{{ item.userName }}</td>
                    
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-btn 
            elevation="2">
            글작성
        </v-btn>
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'BoardComp',
        computed: {
            contentList() {
                let items = data.Content.sort((a, b) => b.contentId - a.contentId);
                items = items.map(contentItem => {
                    return {
                        ...contentItem,
                        userName: data.User.find(userItem => userItem.userId === contentItem.userId).name
                    }
                })
                return items;
            }
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>

</style>