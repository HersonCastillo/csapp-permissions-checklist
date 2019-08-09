import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PermissionsWeb extends Vue {
    public inset: boolean = true;
    public response: string = '';
    public permissions: PermissionsModule = {
        dashboard: {
            id: 0,
            name: 'Dashboard',
            pid: 'A',
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Checkpoint',
                    id: 1,
                    pid: 'A',
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Palo Alto',
                    id: 2,
                    pid: 'A',
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Fortinet',
                    id: 3,
                    pid: 'A',
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'SonicWall',
                    id: 4,
                    pid: 'A',
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        history: {
            name: 'History',
            id: 5,
            pid: 'B',
            isBoss: true,
            value: false,
            childrens: []
        },
        firewall: {
            name: 'Firewall',
            id: 6,
            pid: 'C',
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Object List',
                    id: 7,
                    pid: 'C.A',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Add dynamic type',
                            id: 8,
                            pid: 'C.A',
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete dynamic type',
                            id: 9,
                            pid: 'C.A',
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                }
            ]
        }
    };
    getKeysForPermissions(): PermissionsModule[] {
        let keys = Object.keys(this.permissions);
        let permissions: PermissionsModule[] = [];
        keys.forEach(el => permissions.push(this.permissions[el] as any));
        return permissions;
    }
    getPermissionsBossAttributes(): PermissionAttribute[] {
        let response: PermissionAttribute[] = [];
        for(let item in this.permissions){
            response.push(this.permissions[item]);
        }
        return response;
    }
    getPermissionByPid(pid: string, permissions: PermissionAttribute[]): PermissionAttribute | null {
        let intent = permissions.find(element => {
            if(element.isBoss && element.pid == pid){
                return element;
            } else {
                if(this.hasChildren(element)){
                    return this.getPermissionByPid(pid, element.childrens);
                }
            }
        });
        return intent !== undefined ? intent : null;
    }
    getChildrens(attr: PermissionAttribute): PermissionAttribute[] {
        return attr.childrens;
    }
    hasChildren(attr: PermissionAttribute): boolean {
        return attr && attr.childrens.length > 0;
    }
    getPermissionsForChildrens(childrens: PermissionAttribute[]): string[] {
        let permissions: string[] = [];
        childrens.forEach(el => {
            if(el.isBoss){
                if(el.value){
                    permissions.push(el.pid);
                } else {
                    if(this.hasChildren(el)){
                        let childrenPermissions: string[] = this.getPermissionsForChildrens(el.childrens);
                        permissions.push(...childrenPermissions);
                    }
                }
            } else {
                if(el.value){
                    permissions.push(`${el.pid}:${el.id}`);
                }
                if(this.hasChildren(el)){
                    let childrenPermissions: string[] = this.getPermissionsForChildrens(el.childrens);
                    permissions.push(...childrenPermissions);
                }
            }
        });
        return permissions;
    }
    getPermissions(): void {
        let permissions: string[] = [];
        for(let key in this.permissions){
            let element = this.permissions[key];
            if(element.isBoss){
                if(element.value){
                    permissions.push(element.pid);
                } else {
                    let childrenPermissions = this.getPermissionsForChildrens(element.childrens);
                    permissions.push(...childrenPermissions);
                }
            }
        }
        this.response = permissions.join(';');
    }
    resetPermissions(): void {
        this.response = '';
        for(let item in this.permissions){
            let element = this.permissions[item];
            this.setChildrenValue(element, false);
        }
    }
    setChildrenValue(props: PermissionAttribute, val: boolean): void {
        props.value = val;
        if(this.hasChildren(props)){
            props.childrens.forEach(el => {
                this.setChildrenValue(el, val);
            });
        }
    }
    childrenUpdateEvent(e: boolean, attr: PermissionAttribute): void {
        if(attr.isBoss || e){
            if(attr.childrens.length > 0){
                attr.childrens.forEach(element => {
                    element.value = e;
                    this.childrenUpdateEvent(e, element);
                });
            }
        } else {
            let bossName: string = attr.pid;
            console.log(this.getPermissionByPid(bossName, this.getPermissionsBossAttributes()));
        }
    }
}

interface PermissionsModule {
    [key: string]: PermissionAttribute;
}
interface PermissionAttribute {
    name: string;
    id: number;
    pid: string;
    isBoss: boolean;
    value: boolean;
    childrens: PermissionAttribute[];
}