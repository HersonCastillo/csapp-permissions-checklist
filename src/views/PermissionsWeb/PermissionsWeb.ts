import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PermissionsWeb extends Vue {
    public inset: boolean = true;
    public disabled: boolean = false;
    public selectedAll: boolean = false;
    public response: string = '';
    public permissions: PermissionsModule = {
        dashboard: {
            id: 0,
            name: 'Dashboard',
            pid: 'A',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Checkpoint',
                    id: 1,
                    pid: 'A',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Palo Alto',
                    id: 2,
                    pid: 'A',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Fortinet',
                    id: 3,
                    pid: 'A',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'SonicWall',
                    id: 4,
                    pid: 'A',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        records: {
            name: 'Records',
            id: 5,
            pid: 'B',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Logs',
                    id: 6,
                    pid: 'B',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Map Attack',
                    id: 7,
                    pid: 'B',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Filter',
                    id: 8,
                    pid: 'B',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Advanced filter',
                    id: 9,
                    pid: 'B',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        history: {
            name: 'History',
            id: 10,
            pid: 'C',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Show success',
                    id: 11,
                    pid: 'C',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Show error',
                    id: 12,
                    pid: 'C',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        noc_manager: {
            name: 'NOC Manager',
            id: 13,
            pid: 'D',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Password',
                    id: 14,
                    pid: 'D',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Set configuration',
                    id: 15,
                    pid: 'D',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        firewall: {
            name: 'Firewall',
            id: 16,
            pid: 'E',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Object List',
                    id: 17,
                    pid: 'E.A',
                    fatherPid: 'E',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Add dynamic',
                            id: 18,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Add network',
                            id: 19,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete dynamic',
                            id: 20,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete network',
                            id: 21,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Edit network',
                            id: 22,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show dynamic',
                            id: 23,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show network',
                            id: 24,
                            pid: 'E.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'See IP dynamic',
                            id: 25,
                            pid: 'E.A.A',
                            fatherPid: 'E.A',
                            isBoss: true,
                            value: false,
                            childrens: [
                                {
                                    name: 'Edit',
                                    id: 26,
                                    pid: 'E.A.A',
                                    fatherPid: null,
                                    isBoss: false,
                                    value: false,
                                    childrens: []
                                },
                                {
                                    name: 'Delete',
                                    id: 27,
                                    pid: 'E.A.A',
                                    fatherPid: null,
                                    isBoss: false,
                                    value: false,
                                    childrens: []
                                },
                                {
                                    name: 'List IP',
                                    id: 28,
                                    pid: 'E.A.A.A',
                                    fatherPid: 'E.A.A',
                                    isBoss: true,
                                    value: false,
                                    childrens: [
                                        {
                                            name: 'Delete IP',
                                            id: 29,
                                            pid: 'E.A.A.A',
                                            fatherPid: null,
                                            isBoss: false,
                                            value: false,
                                            childrens: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Access Rules',
                    id: 30,
                    pid: 'E.B',
                    fatherPid: 'E',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Add editable rule',
                            id: 31,
                            pid: 'E.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Visibility editable',
                            id: 32,
                            pid: 'E.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete rule editable',
                            id: 33,
                            pid: 'E.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show default',
                            id: 34,
                            pid: 'E.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show editable',
                            id: 35,
                            pid: 'E.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                },
                {
                    name: 'IP Request',
                    id: 36,
                    pid: 'E.C',
                    fatherPid: 'E',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Accept request',
                            id: 37,
                            pid: 'E.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Decline request',
                            id: 38,
                            pid: 'E.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show pending',
                            id: 39,
                            pid: 'E.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show all',
                            id: 40,
                            pid: 'E.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                }
            ]
        },
        layers: {
            name: 'Layers',
            id: 41,
            pid: 'F',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'SOC 5G',
                    id: 42,
                    pid: 'F.A',
                    fatherPid: 'F',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Edit block',
                            id: 43,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Edit allow',
                            id: 44,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete block',
                            id: 45,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete allow',
                            id: 46,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Add IP block',
                            id: 47,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Add IP allow',
                            id: 48,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show block',
                            id: 49,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show allow',
                            id: 50,
                            pid: 'F.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                },
                {
                    name: 'Checkpoint',
                    id: 51,
                    pid: 'F.B',
                    fatherPid: 'F',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Into checkpoint',
                            id: 52,
                            pid: 'F.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Outside checkpoint',
                            id: 53,
                            pid: 'F.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete',
                            id: 54,
                            pid: 'F.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                },
                {
                    name: 'Gray List',
                    id: 55,
                    pid: 'F.C',
                    fatherPid: 'F',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Accept request SOC',
                            id: 56,
                            pid: 'F.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Decline request SOC',
                            id: 57,
                            pid: 'F.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show Gray List',
                            id: 58,
                            pid: 'F.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Show SOC Request IP',
                            id: 59,
                            pid: 'F.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                }
            ]
        },
        access_control: {
            name: 'Access Control',
            id: 60,
            pid: 'G',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Companies',
                    id: 61,
                    pid: 'G.A',
                    fatherPid: 'G',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Add',
                            id: 62,
                            pid: 'G.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'IP White List',
                            id: 63,
                            pid: 'G.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Edit',
                            id: 64,
                            pid: 'G.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete',
                            id: 65,
                            pid: 'G.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Disable',
                            id: 66,
                            pid: 'G.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Change group',
                            id: 67,
                            pid: 'G.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                },
                {
                    name: 'Users',
                    id: 68,
                    pid: 'G.B',
                    fatherPid: 'G',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Add',
                            id: 69,
                            pid: 'G.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Change password',
                            id: 70,
                            pid: 'G.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete',
                            id: 71,
                            pid: 'G.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                },
                {
                    name: 'Blocked Users',
                    id: 72,
                    pid: 'G.C',
                    fatherPid: 'G',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Unlock',
                            id: 73,
                            pid: 'G.C',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                }
            ]
        },
        companies_ip: {
            name: 'Companies IP',
            id: 74,
            pid: 'H',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Add IP',
                    id: 75,
                    pid: 'H',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Delete IP',
                    id: 76,
                    pid: 'H',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Edit IP',
                    id: 77,
                    pid: 'H',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        sync: {
            name: 'Sync',
            id: 78,
            pid: 'I',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: []
        },
        install_policies: {
            name: 'Install Policies',
            id: 79,
            pid: 'J',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: []
        },
        browser_warns: {
            name: 'Browser Warning',
            id: 80,
            pid: 'K',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: []
        },
        mikrotik_tools: {
            name: 'Mikrotik Tools',
            id: 81,
            pid: 'L',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Users',
                    id: 82,
                    pid: 'L.A',
                    fatherPid: 'L',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Usage',
                            id: 83,
                            pid: 'L.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Status',
                            id: 84,
                            pid: 'L.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        },
                        {
                            name: 'Delete',
                            id: 84,
                            pid: 'L.A',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                },
                {
                    name: 'Groups',
                    id: 86,
                    pid: 'L.B',
                    fatherPid: 'L',
                    isBoss: true,
                    value: false,
                    childrens: [
                        {
                            name: 'Add',
                            id: 87,
                            pid: 'L.B',
                            fatherPid: null,
                            isBoss: false,
                            value: false,
                            childrens: []
                        }
                    ]
                }
            ]
        },
        client_area: {
            name: 'Client Area',
            id: 88,
            pid: 'M',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Personal configuration',
                    id: 89,
                    pid: 'M',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Payment records',
                    id: 90,
                    pid: 'M',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Manually Pay',
                    id: 91,
                    pid: 'M',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        company_profile: {
            name: 'Company Profile',
            id: 92,
            pid: 'N',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Chart',
                    id: 93,
                    pid: 'N',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                }
            ]
        },
        report: {
            name: 'Reports',
            id: 94,
            pid: 'O',
            fatherPid: null,
            isBoss: true,
            value: false,
            childrens: [
                {
                    name: 'Generate',
                    id: 95,
                    pid: 'O',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
                },
                {
                    name: 'Download',
                    id: 96,
                    pid: 'O',
                    fatherPid: null,
                    isBoss: false,
                    value: false,
                    childrens: []
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
    getLinealPermissions(permissions: PermissionAttribute[]): PermissionAttribute[] {
        let response: PermissionAttribute[] = [];
        permissions.forEach(element => {
            response.push(element);
            if (this.hasChildren(element)) {
                let lineal: PermissionAttribute[] = this.getLinealPermissions(element.childrens);
                response.push(...lineal);
            }
        });
        return response;
    }
    getPermissionsBossAttributes(): PermissionAttribute[] {
        let response: PermissionAttribute[] = [];
        for (let item in this.permissions) {
            response.push(this.permissions[item]);
        }
        return response;
    }
    getPermissionByPid(pid: string, permissions: PermissionAttribute[]): PermissionAttribute | null {
        let intent = permissions.find(element => element.isBoss && element.pid == pid);
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
            if (el.isBoss) {
                if (el.value) {
                    permissions.push(el.pid);
                } else {
                    if (this.hasChildren(el)) {
                        let childrenPermissions: string[] = this.getPermissionsForChildrens(el.childrens);
                        permissions.push(...childrenPermissions);
                    }
                }
            } else {
                if (el.value) {
                    permissions.push(`${el.pid}:${el.id}`);
                }
                if (this.hasChildren(el)) {
                    let childrenPermissions: string[] = this.getPermissionsForChildrens(el.childrens);
                    permissions.push(...childrenPermissions);
                }
            }
        });
        return permissions;
    }
    filterPermissions(permissions: string[]): string[] {
        let expressionCommand: RegExp = /^[A-Z](([.][A-Z]){1,3})?[:]?([\d]{1,3})?$/;
        let command: RegExp = /^[A-Z](([.][A-Z]){1,3})?[:]?/;
        let argument: RegExp = /[:]?([\d]{1,3})?$/;

        let blacklist: any[] = [];
        let whitelist: string[] = [];
        for (let item of permissions) {
            if (expressionCommand.test(item)) {
                let replacedCommand = item.replace(new RegExp(argument, 'g'), '');
                let replacedArguments = item.replace(new RegExp(command, 'g'), '');

                let intent = blacklist.find(r => r.pid == replacedCommand);
                if (!intent) {
                    blacklist.push({
                        pid: replacedCommand,
                        childrens: replacedArguments != '' ? [replacedArguments] : []
                    });
                } else {
                    if (replacedArguments != '') {
                        intent.childrens.push(replacedArguments);
                    }
                }
            }
        }
        for (let item of blacklist) {
            if (item.childrens.length > 0) {
                whitelist.push(`${item.pid}:${item.childrens.join(',')}`);
            } else {
                whitelist.push(item.pid);
            }
        }
        return whitelist;
    }
    getPermissions(): void {
        let permissions: string[] = [];
        for (let key in this.permissions) {
            let element = this.permissions[key];
            if (element.isBoss) {
                if (element.value) {
                    permissions.push(element.pid);
                } else {
                    let childrenPermissions = this.getPermissionsForChildrens(element.childrens);
                    permissions.push(...childrenPermissions);
                }
            }
        }
        if (this.disabled) {
            this.response = '-';
        } else if (this.selectedAll) {
            this.response = '*';
        } else {
            this.response = this.filterPermissions(permissions).join(';');
        }
    }
    resetPermissions(flag?: boolean): void {
        this.response = '';
        for (let item in this.permissions) {
            let element = this.permissions[item];
            this.setChildrenValue(element, flag || false);
        }
    }
    setChildrenValue(props: PermissionAttribute, val: boolean): void {
        props.value = val;
        if (this.hasChildren(props)) {
            props.childrens.forEach(el => {
                this.setChildrenValue(el, val);
            });
        }
    }
    childrenUpdateEvent(e: boolean, attr: PermissionAttribute): void {
        if (attr.isBoss || e) {
            if (attr.childrens.length > 0) {
                attr.childrens.forEach(element => {
                    element.value = e;
                    this.childrenUpdateEvent(e, element);
                });
            }
        } else {
            let bossName: string = attr.pid;
            let permissionsAttributes: PermissionAttribute[] = this.getLinealPermissions(this.getPermissionsBossAttributes());
            let element: PermissionAttribute | null = this.getPermissionByPid(bossName, permissionsAttributes);
            if (element) {
                if (element.fatherPid) {
                    let elementFather: PermissionAttribute | null = this.getPermissionByPid(element.fatherPid, permissionsAttributes);
                    while (elementFather) {
                        elementFather.value = e;
                        if (elementFather.fatherPid) {
                            elementFather = this.getPermissionByPid(elementFather.fatherPid, permissionsAttributes);
                        } else {
                            elementFather = null;
                        }
                    }
                }
                element.value = e;
            }
        }
    }
    disableSystemAccess(e: boolean): void {
        if (e) {
            this.selectedAll = false;
            this.resetPermissions(false);
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
    fatherPid: string | null;
    isBoss: boolean;
    value: boolean;
    childrens: PermissionAttribute[];
}