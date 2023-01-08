<template>
    <div>
        <v-row>
            <v-col>
                {{ userName }}
                <br>{{ comment.createdAt }}
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
            </v-col>
        </v-row>        
    </div>
</template>

<script>
    import data from '@/data';

    export default {
        name: 'CommentItem',
        props: {
            comment: Object
        },
        data() {
            return {
                userName: ''
            }
        },
        mounted() {
            this.userName = data.User.find(item => item.userId === this.comment.userId).name;
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .v-btn {
        margin-right: 10px;
    }
</style>