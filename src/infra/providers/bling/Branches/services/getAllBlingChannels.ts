import { blingGet } from "../../services/blingClient";
import { BlingChannelResponse } from "../interface/BlingChannelResponse"

export async function getAllBlingChannels(): Promise<BlingChannelResponse> {
  const response = await blingGet<BlingChannelResponse>("/canais-venda");
  return response;
}