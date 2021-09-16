export class User {
    id!: number;
    username!: string;
    email!:string;
    roles!:[];
    token!: string;
    tokenType?: string;
}