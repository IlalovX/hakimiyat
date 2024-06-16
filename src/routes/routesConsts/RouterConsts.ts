import { getRouteMain } from "../routerPaths/RouterPaths";
import { RouterEnums } from "../routesEnums/RouterEnums";

export const RouterConsts: Record<RouterEnums, string> = {
  [RouterEnums.MAIN]: getRouteMain(),
};
