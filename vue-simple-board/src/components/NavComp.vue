<template>
    <v-card
        height="400"
        width="256">

        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    @click="$router.push(item.link)">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </v-card>
</template>

<script>
    export default {
        name: 'NavComp',
        data() {
            return {
                items: [
                    { title: '공지사항', icon: 'mdi-view-dashboard', link: '/board/notice' },
                    { title: '자유게시판', icon: 'mdi-image', link: '/board/free' },
                    { title: '구인구직', icon: 'mdi-help-box', link: '/board/job' },
                ],
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