import { EvmExplorerService } from "./evm-explorer.service";
/**
 * https://arbiscan.io/
 */
export class Arbitrum extends EvmExplorerService {
  readonly minConfirmations: number = 3
  
}
