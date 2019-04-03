<template>
    <div id="pageTable">
        <v-container grid-list-xl fluid>
            <v-layout row wrap>
                <v-flex lg12>
                    <v-card>
                        <v-toolbar card color="white">
                            <v-text-field
                                    flat
                                    solo
                                    prepend-icon="search"
                                    placeholder="搜索"
                                    v-model="search"
                                    hide-details
                                    class="hidden-sm-and-down"
                            ></v-text-field>
                            <v-btn icon>
                                <v-icon>filter_list</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-card-text class="pa-0">
                            <v-data-table
                                    :headers="complex.headers"
                                    :search="search"
                                    :items="complex.items"
                                    :rows-per-page-items="[10, 25, 50, { text: 'All', value: -1 }]"
                                    class="elevation-1"
                                    item-key="name"
                                    select-all
                                    v-model="complex.selected"
                            >
                                <template slot="items" slot-scope="props">
                                    <td>
                                        <v-checkbox
                                                primary
                                                hide-details
                                                v-model="props.selected"
                                        ></v-checkbox>
                                    </td>
                                    <td>
                                        <v-avatar size="32">
                                            <img :src="props.item.avatar" alt=""/>
                                        </v-avatar>
                                    </td>
                                    <td>{{ props.item.name }}</td>
                                    <td>{{ props.item.email }}</td>
                                    <td>{{ props.item.phone }}</td>
                                    <td>
                                        <v-btn
                                                depressed
                                                outline
                                                icon
                                                fab
                                                dark
                                                color="primary"
                                                small
                                        >
                                            <v-icon>edit</v-icon>
                                        </v-btn>
                                        <v-btn depressed outline icon fab dark color="pink" small>
                                            <v-icon>delete</v-icon>
                                        </v-btn>
                                    </td>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import { Items as Users } from "@/api/user";
    export default {
        data() {
            return {
                search: "",
                complex: {
                    selected: [],
                    headers: [
                        {
                            text: "头像",
                            value: "avatar"
                        },
                        {
                            text: "姓名",
                            value: "name"
                        },
                        {
                            text: "Email",
                            value: "email"
                        },
                        {
                            text: "手机",
                            value: "phone"
                        },
                        {
                            text: "操作",
                            value: ""
                        }
                    ],
                    items: []
                }
            }
        },
        mounted() {
            this.getAdminList();
            console.log(this.complex.items)
        },
        methods: {
            getAdminList() {
                var vm = this;
                this.axios.get('/api/student')
                    .then(function (response) {
                        vm.complex.items = response.data;
                        console.log(vm.complex.items);
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
