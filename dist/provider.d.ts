import { ethers } from "ethers";
import { ConnectionInfo } from "ethers/lib/utils";
export declare class BundlerJsonRpcProvider extends ethers.providers.JsonRpcProvider {
    private bundlerRpc?;
    private bundlerMethods;
    setBundlerRpc(bundlerRpc?: string | ConnectionInfo): BundlerJsonRpcProvider;
    send(method: string, params: any[]): Promise<any>;
}
