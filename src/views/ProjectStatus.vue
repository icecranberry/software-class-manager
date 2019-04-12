<template>
    <div>
    <v-tabs>
        <v-tab v-for="n in Status" :key="n">第{{ n }}周作业未提交</v-tab>
    </v-tabs>
<!--    <v-layout row wrap>-->
<!--    <v-flex lg3 sm12 v-for="(item, index) in users" :key="'mini' + index">-->
<!--        <name-card mini v-bind="item"> </name-card>-->
<!--    </v-flex>-->
<!--    </v-layout>-->
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
            <v-flex lg3 sm12 v-for="(item, index) in users" :key="'mini' + index">
                <name-card mini v-bind="item"> </name-card>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
    import NameCard from "@/components/widgets/card/NameCard";
    import ProfileCard from "@/components/widgets/card/ProfileCard";
    import VWidget from "@/components/VWidget";
    export default {
        components: {
            NameCard,
            VWidget,
            ProfileCard
        },
        data(){
            return{
                Status:["一","二","三"],
                users: [
                    {
                        jobTitle: "201502010000",
                        name: "测试学生1",
                        avatar: {
                            src: "https://randomuser.me/api/portraits/men/1.jpg",
                            size: "36"
                        }
                    },
                    {
                        jobTitle: "201502010002",
                        name: "测试学生2",
                        avatar: {
                            src: "https://randomuser.me/api/portraits/women/1.jpg",
                            size: "36"
                        }
                    },
                    {
                        jobTitle: "201502010003",
                        name: "测试学生3",
                        avatar: {
                            src: "https://randomuser.me/api/portraits/men/10.jpg",
                            size: "36"
                        }
                    },
                    {
                        jobTitle: "201502010004",
                        name: "测试学生4",
                        avatar: {
                            src: "https://randomuser.me/api/portraits/men/5.jpg",
                            size: "36"
                        }
                    }
                ]
            };
        }
    }
</script>

<style scoped>

</style>