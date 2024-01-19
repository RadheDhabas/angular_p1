export class User {
    name!: string;
    password!: string;
    mobileNumber!: number;
    email!: string;
    role!: string;
    address!: Address;
}

export class Address {
    id!: number;
    city!: string;
    state!: string;
    zip!: number;
}

export class Product {
    id!: any;
    name!: string;
    p_description!: string;
    mrp!: number;
    dp!: number;
    status!: boolean;
}

export class Order {
    id!: any;
    userId!: any;
    sellerId!: any;
    product!: Product;
    delivery_address!: Address;
    contact!: number;
    dateTime!: string;
}