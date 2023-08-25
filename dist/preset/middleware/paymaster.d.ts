import { UserOperationMiddlewareFn } from "../../types";
import { ConnectionInfo } from "ethers/lib/utils";
export declare const verifyingPaymaster: (paymasterRpc: string | ConnectionInfo, context: any) => UserOperationMiddlewareFn;
