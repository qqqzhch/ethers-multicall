import { JsonFragment } from '@ethersproject/abi';
export declare class Contract {
    private _address;
    private _abi;
    private _functions;
    readonly address: string;
    readonly abi: JsonFragment[];
    readonly functions: JsonFragment[];
    constructor(address: string, abi: JsonFragment[]);
    [method: string]: any;
}
