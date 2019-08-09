import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    public inset: boolean = true;
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
    getChildrens(attr: PermissionAttribute): PermissionAttribute[] {
        return attr.childrens;
    }
    hasChildren(attr: PermissionAttribute): boolean {
        return attr && attr.childrens.length > 0;
    }
    getPermissions(): void {
        console.log(this.permissions);
    }
    resetPermissions(): void {
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