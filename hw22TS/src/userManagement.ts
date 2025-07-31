export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            name: string
            email: string
            isSuperAdmin: boolean

            constructor(name: string, email: string, isSuperAdmin: boolean) {
                this.email = email
                this.name = name
                this.isSuperAdmin = isSuperAdmin
            }

            changeRole(): void {
                const tog = this.isSuperAdmin = !this.isSuperAdmin
                console.log(`Role has been successfully changed to ' ${tog} '`);
            }
        }
    }
}