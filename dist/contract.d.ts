import { JsonFragment } from '@ethersproject/abi';
export declare class Contract {
    private _address;
    private _abi;
    private _functions;
    get address(): string;
    get abi(): JsonFragment[];
    get functions(): JsonFragment[];
    constructor(address: string, abi: JsonFragment[]);
    [method: string]: any;
}
