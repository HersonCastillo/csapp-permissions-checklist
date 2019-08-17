<template>
    <div>
        <v-btn 
            dark
            class="center"
            @click="downloadFile"
        >
            You want it? take it
        </v-btn>
    </div>
</template>

<!--Scripts-->
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        public downloadurl = {
            version: null,
            status: null,
            dateVersion: null
        };
        constructor(){
            super();
            setTimeout(() => {
                const url: string = 'https://csapp.red5g.com/auth/app';
                fetch(url, {
                    method: 'get',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(r => r.json()).then(r => {
                    if(r.app_name){
                        this.downloadurl.version        = r['current_version'];
                        this.downloadurl.status         = r['status'];
                        this.downloadurl.dateVersion    = r['version_date'];
                    }
                });
            }, 1);
        }
        downloadFile(): void {
            const baseurl: string   = 'https://csapp.red5g.com/auth/apk/download/';
            const version           = this.downloadurl.version;
            const dateVersion       = this.downloadurl.dateVersion;
            const status            = this.downloadurl.status;
            const url: string       = baseurl.concat(`${version}/${dateVersion}/${status}`);
            window.open(url);
        }
    }
</script>
<style lang="scss" scoped>
    .center{
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
</style>
