<template>
    <v-container grid-list-md text-center>
        <v-layout wrap>
            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="resetPermissions">Reset Permissions</v-btn>
                        <v-btn @click="getPermissions" :color="'success'">Get Permissions</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4 md4>
                <v-container class="margin-x3" v-for="(item, index) in getKeysForPermissions()" :key="index">
                    <v-switch
                        :label="item.name"
                        :inset="inset"
                        v-model="item.value"
                        hide-details
                    ></v-switch>
                    <v-container v-if="hasChildren(item)">
                        <div v-for="(childrenOne, indexOne) in getChildrens(item)" :key="indexOne">
                            <v-switch
                                class="margin-x3"
                                :label="childrenOne.name"
                                :inset="inset"
                                v-model="childrenOne.value"
                                hide-details
                            ></v-switch>
                            <v-container v-if="hasChildren(childrenOne)">
                                <div v-for="(childrenTwo, indexTwo) in getChildrens(childrenOne)" :key="indexTwo">
                                    <v-switch
                                        class="margin-x4"
                                        :label="childrenTwo.name"
                                        :inset="inset"
                                        v-model="childrenTwo.value"
                                        hide-details
                                    ></v-switch>
                                    <v-container v-if="hasChildren(childrenTwo)">
                                        <div v-for="(childrenThree, indexThree) in getChildrens(childrenTwo)" :key="indexThree">
                                            <v-switch
                                                class="margin-x5"
                                                :label="childrenThree.name"
                                                :inset="inset"
                                                v-model="childrenThree.value"
                                                hide-details
                                            ></v-switch>
                                            <v-container v-if="hasChildren(childrenThree)">
                                                <div v-for="(childrenFour, indexFour) in getChildrens(childrenThree)" :key="indexFour">
                                                    <v-switch
                                                        class="margin-x6"
                                                        :label="childrenFour.name"
                                                        :inset="inset"
                                                        v-model="childrenFour.value"
                                                        hide-details
                                                    ></v-switch>
                                                    <v-container v-if="hasChildren(childrenFour)">
                                                        <div v-for="(childrenFive, indexFive) in getChildrens(childrenFour)" :key="indexFive">
                                                            <v-switch
                                                                class="margin-x7"
                                                                :label="childrenFive.name"
                                                                :inset="inset"
                                                                v-model="childrenFive.value"
                                                                hide-details
                                                            ></v-switch>
                                                        </div>
                                                    </v-container>
                                                </div>
                                            </v-container>
                                        </div>
                                    </v-container>
                                </div>
                            </v-container>
                        </div>
                    </v-container>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<!--Scripts-->
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped>
    @import url('./Home.scss');
</style>
