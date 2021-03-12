export default class User {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;

    constructor(memberMap: any) {
        this.firstName = memberMap.firstName;
        this.lastName = memberMap.lastName;
        this.name = `${this.firstName} ${this.lastName}`;
        this.email = memberMap.email;
        this.photo = memberMap.photo;
    }

    toObj(): any {
        return {
            name: this.name,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            photo: this.photo
        };
    }
}