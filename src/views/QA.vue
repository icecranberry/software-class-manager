<template>
    <div id="app">
        <v-container grid-list-xl fluid>
        <v-layout column>
        <v-flex>
            <v-card
                    class="elevation-10"
                    color="grey lighten-2"
            >
                <v-card-title>
                    <v-icon
                            large
                            left
                    >
                        mdi-twitter
                    </v-icon>
<!--                    <span class="title font-weight-light">Twitter</span>-->
                    <h2><b>Test Tile</b></h2>
                </v-card-title>

                <v-card-text class="headline font-weight-light">
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.
                </v-card-text>

                <v-card-actions>
                    <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                            <v-img
                                    class="elevation-6"
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>测试学生1</v-list-tile-title>
                        </v-list-tile-content>


                        <v-layout
                                align-center
                                justify-end
                                style="margin: 10px"
                        >
<!--                            <v-icon class="mr-1">mdi-heart</v-icon>-->
<!--                            <span class="subheading mr-2">256</span>-->
<!--                            <span class="mr-1">·</span>-->
<!--                            <v-icon class="mr-1">mdi-share-variant</v-icon>-->
                            <span >2019-04-11</span>
                        </v-layout>
                    </v-list-tile>
                </v-card-actions>
            </v-card>
        </v-flex >
        <v-flex>
            <v-card
                    class="elevation-10"
                    color="grey lighten-2"
            >
<!--                <v-card-title>-->
<!--                    <v-icon-->
<!--                            large-->
<!--                            left-->
<!--                    >-->
<!--                        mdi-twitter-->
<!--                    </v-icon>-->
<!--                    &lt;!&ndash;                    <span class="title font-weight-light">Twitter</span>&ndash;&gt;-->
<!--                    <h2><b>Test Tile</b></h2>-->
<!--                </v-card-title>-->

                <v-card-text class="headline font-weight-light">
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.This is an test text for testing.This is an test text for testing.
                    This is an test text for testing.This is an test text for testing.
                </v-card-text>

                <v-card-actions>
                    <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                            <v-img
                                    class="elevation-6"
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>测试学生1</v-list-tile-title>
                        </v-list-tile-content>

                        <v-layout
                                align-center
                                justify-end
                                style="margin: 10px"
                        >
                            <!--                            <v-icon class="mr-1">mdi-heart</v-icon>-->
                            <!--                            <span class="subheading mr-2">256</span>-->
                            <!--                            <span class="mr-1">·</span>-->
                            <!--                            <v-icon class="mr-1">mdi-share-variant</v-icon>-->
                            <span >2019-04-11</span>
                        </v-layout>
                    </v-list-tile>
                </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
    import VWidget from "@/components/VWidget";
    export default {
        components: {
            VWidget
        }
    }
</script>

<style scoped>

</style>