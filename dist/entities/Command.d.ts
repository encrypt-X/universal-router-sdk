import { RoutePlanner } from '../utils/routerCommands';
export declare type TradeConfig = {
    allowRevert: boolean;
};
export declare enum RouterTradeType {
    UniswapTrade = "UniswapTrade",
    NFTTrade = "NFTTrade",
    UnwrapWETH = "UnwrapWETH",
    WrapSTETH = "WrapSTETH",
    UnwrapSTETH = "UnwrapSTETH"
}
export interface Command {
    tradeType: RouterTradeType;
    encode(planner: RoutePlanner, config: TradeConfig): void;
}
