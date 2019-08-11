<template>
    <v-container grid-list-md text-center>
        <v-layout wrap>
            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="() => { selectedAll = false; resetPermissions(false); }">Reset Permissions</v-btn>
                        <v-btn @click="getPermissions" :color="'success'">Get Permissions</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <span>
                    <b>{{response}}</b>
                </span>
            </v-flex>
            <v-flex xs12 sm4 md4>
                <v-checkbox
                    v-model="disabled"
                    label="Disable system access"
                    @change="disableSystemAccess($event)"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    v-model="selectedAll"
                    label="Select all"
                    :disabled="disabled"
                    @change="resetPermissions($event)"
                    hide-details
                ></v-checkbox>
                <v-container class="margin-x3" v-for="(item, index) in getKeysForPermissions()" :key="index">
                    <v-switch
                        :label="`${item.isBoss ? `${item.pid} >` : ''} ${item.name} (${item.id})`"
                        :inset="inset"
                        :disabled="disabled"
                        v-model="item.value"
                        @change="childrenUpdateEvent($event, item)"
                        hide-details
                    ></v-switch>
                    <v-container v-if="hasChildren(item)">
                        <div v-for="(childrenOne, indexOne) in getChildrens(item)" :key="indexOne">
                            <v-switch
                                class="margin-x3"
                                :label="`${childrenOne.isBoss ? `${childrenOne.pid} >` : ''} ${childrenOne.name} (${childrenOne.id})`"
                                :inset="inset"
                                :disabled="disabled"
                                v-model="childrenOne.value"
                                @change="childrenUpdateEvent($event, childrenOne)"
                                hide-details
                            ></v-switch>
                            <v-container v-if="hasChildren(childrenOne)">
                                <div v-for="(childrenTwo, indexTwo) in getChildrens(childrenOne)" :key="indexTwo">
                                    <v-switch
                                        class="margin-x4"
                                        :label="`${childrenTwo.isBoss ? `${childrenTwo.pid} >` : ''} ${childrenTwo.name} (${childrenTwo.id})`"
                                        :inset="inset"
                                        :disabled="disabled"
                                        v-model="childrenTwo.value"
                                        @change="childrenUpdateEvent($event, childrenTwo)"
                                        hide-details
                                    ></v-switch>
                                    <v-container v-if="hasChildren(childrenTwo)">
                                        <div v-for="(childrenThree, indexThree) in getChildrens(childrenTwo)" :key="indexThree">
                                            <v-switch
                                                class="margin-x5"
                                                :label="`${childrenThree.isBoss ? `${childrenThree.pid} >` : ''} ${childrenThree.name} (${childrenThree.id})`"
                                                :inset="inset"
                                                :disabled="disabled"
                                                v-model="childrenThree.value"
                                                @change="childrenUpdateEvent($event, childrenThree)"
                                                hide-details
                                            ></v-switch>
                                            <v-container v-if="hasChildren(childrenThree)">
                                                <div v-for="(childrenFour, indexFour) in getChildrens(childrenThree)" :key="indexFour">
                                                    <v-switch
                                                        class="margin-x6"
                                                        :label="`${childrenFour.isBoss ? `${childrenFour.pid} >` : ''} ${childrenFour.name} (${childrenFour.id})`"
                                                        :inset="inset"
                                                        :disabled="disabled"
                                                        v-model="childrenFour.value"
                                                        @change="childrenUpdateEvent($event, childrenFour)"
                                                        hide-details
                                                    ></v-switch>
                                                    <v-container v-if="hasChildren(childrenFour)">
                                                        <div v-for="(childrenFive, indexFive) in getChildrens(childrenFour)" :key="indexFive">
                                                            <v-switch
                                                                class="margin-x7"
                                                                :label="`${childrenFive.isBoss ? `${childrenFive.pid} >` : ''} ${childrenFive.name} ${childrenFive.id}`"
                                                                :inset="inset"
                                                                :disabled="disabled"
                                                                v-model="childrenFive.value"
                                                                @change="childrenUpdateEvent($event, childrenFive)"
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
<script lang="ts" src="./PermissionsWeb.ts"></script>
<style lang="scss" scoped>
    @import url('./PermissionsWeb.scss');
</style>
