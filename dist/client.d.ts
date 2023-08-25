import { BigNumberish } from "ethers";
import { ConnectionInfo } from "ethers/lib/utils";
import { IClient, IUserOperationBuilder, ISendUserOperationOpts, IClientOpts } from "./types";
import { EntryPoint } from "./typechain";
export declare class Client implements IClient {
    private provider;
    entryPoint: EntryPoint;
    chainId: BigNumberish;
    waitTimeoutMs: number;
    waitIntervalMs: number;
    private constructor();
    static init(rpcUrl: string | ConnectionInfo, opts?: IClientOpts): Promise<Client>;
    buildUserOperation(builder: IUserOperationBuilder): Promise<import("./types").IUserOperation>;
    sendUserOperation(builder: IUserOperationBuilder, opts?: ISendUserOperationOpts): Promise<{
        userOpHash: string;
        wait: () => Promise<import("./typechain/EntryPoint").UserOperationEventEvent | null>;
    }>;
}
