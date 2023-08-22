import { BigNumberish, BytesLike, ethers } from "ethers";
import { IUserOperation, IUserOperationBuilder, UserOperationMiddlewareFn } from "./types";
export declare const DEFAULT_VERIFICATION_GAS_LIMIT: ethers.BigNumber;
export declare const DEFAULT_CALL_GAS_LIMIT: ethers.BigNumber;
export declare const DEFAULT_PRE_VERIFICATION_GAS: ethers.BigNumber;
export declare const DEFAULT_USER_OP: IUserOperation;
export declare class UserOperationBuilder implements IUserOperationBuilder {
    private defaultOp;
    private currOp;
    private middlewareStack;
    constructor();
    private resolveFields;
    getSender(): string;
    getNonce(): BigNumberish;
    getInitCode(): BytesLike;
    getCallData(): BytesLike;
    getCallGasLimit(): BigNumberish;
    getVerificationGasLimit(): BigNumberish;
    getPreVerificationGas(): BigNumberish;
    getMaxFeePerGas(): BigNumberish;
    getMaxPriorityFeePerGas(): BigNumberish;
    getPaymasterAndData(): BytesLike;
    getSignature(): BytesLike;
    getOp(): IUserOperation;
    setSender(val: string): this;
    setNonce(val: BigNumberish): this;
    setInitCode(val: BytesLike): this;
    setCallData(val: BytesLike): this;
    setCallGasLimit(val: BigNumberish): this;
    setVerificationGasLimit(val: BigNumberish): this;
    setPreVerificationGas(val: BigNumberish): this;
    setMaxFeePerGas(val: BigNumberish): this;
    setMaxPriorityFeePerGas(val: BigNumberish): this;
    setPaymasterAndData(val: BytesLike): this;
    setSignature(val: BytesLike): this;
    setPartial(partialOp: Partial<IUserOperation>): this;
    useDefaults(partialOp: Partial<IUserOperation>): this;
    resetDefaults(): this;
    useMiddleware(fn: UserOperationMiddlewareFn): this;
    resetMiddleware(): this;
    buildOp(entryPoint: string, chainId: BigNumberish): Promise<IUserOperation>;
    resetOp(): this;
}
