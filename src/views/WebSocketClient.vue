<template>
    <v-container grid-list-md>
        <v-layout wrap>
            <v-flex xs12>
                <v-card dark color="primary">
                    <v-card-actions>
                        <span>
                            <b>WebSocket Client App</b>
                        </span>
                        <v-spacer></v-spacer>
                        <v-btn @click="connect" :color="'success'">Establish connection</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-form v-model="formOne.isValid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="formOne.components.title.value"
                                    :rules="formOne.components.title.rules"
                                    label="Title"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field
                                    v-model="formOne.components.username.value"
                                    :rules="formOne.components.username.rules"
                                    label="Username"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-select
                                    v-model="formOne.components.type.value"
                                    :rules="formOne.components.type.rules"
                                    :items="formOne.components.type.items"
                                    label="Type"
                                    required
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formTwo.components.email.value"
                                    :rules="formTwo.components.email.rules"
                                    label="Email"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formTwo.components.password.value"
                                    :rules="formTwo.components.password.rules"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    
    @Component
    export default class WebSocketClient extends Vue {
        private baseUrl: string = 'csapp.red5g.com';
        public formOne = {
            isValid: false,
            components: {
                title: {
                    value: '',
                    rules: [
                        (v: any) => !!v || 'Title is required'
                    ]
                },
                username: {
                    value: '',
                    rules: [
                        (v: any) => !!v || 'Username is required'
                    ]
                },
                type: {
                    value: null,
                    items: [
                        'Undefined',
                        'Request',
                        'Add',
                        'Edit',
                        'Delete'
                    ],
                    rules: [
                        (v: any) => !!v || 'Username is required'
                    ]
                }
            }
        };
        public formTwo = {
            isValid: false,
            components: {
                email: {
                    value: '',
                    rules: [
                        (v: any) => !!v || 'Email is required'
                    ]
                },
                password: {
                    value: '',
                    rules: [
                        (v: any) => !!v || 'Password is required'
                    ]
                }
            }
        };

        connect(): void {
            const { email, password } = this.formTwo.components;
            fetch(`https://${this.baseUrl}/auth/login`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            }).then(r => r.json()).then(r => {
                if(r.token){
                    const token: string = r.token;
                    const { title, username, type } = this.formOne.components;
                    const socket: WebSocket = new WebSocket(`wss://${this.baseUrl}`);
                    socket.onopen = () => {
                        console.info('Socket connected...');
                        socket.send(JSON.stringify({
                            token,
                            path: 'post',
                            blob: {
                                title: title.value,
                                user: username.value,
                                type: type.value || 'undefined'
                            }
                        }));
                        socket.close();
                    };
                } else {
                    alert('No se puede iniciar sesión');
                }
            }).catch(err => {
                alert(JSON.stringify(err));
            });
        }
    }
</script>

<style lang="scss" scoped>
    .crt-txt {
        padding: 10px;
        text-align: left !important;
        width: 100%;
    }
</style>