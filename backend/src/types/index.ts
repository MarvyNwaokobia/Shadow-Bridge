export type BridgeStatus =
  | "pending"
  | "attesting"
  | "relaying"
  | "completed"
  | "failed";

export interface BridgeTx {
  burnTxHash: string;
  sourceChainId: number;
  sourceDomain: number;
  destDomain: number;
  recipient: string;
  status: BridgeStatus;
  relayTxHash?: string;
  error?: string;
  messageBytes?: string;
  attestation?: string;
  createdAt: number;
  updatedAt: number;
}

export type WsMessage =
  | { type: "status_update"; burnTxHash: string; status: BridgeStatus }
  | { type: "relay_complete"; burnTxHash: string; relayTxHash: string; destChainId: number }
  | { type: "relay_failed"; burnTxHash: string; error: string };

export interface RelayRequest {
  burnTxHash: string;
  sourceChainId: number;
  destDomain: number;
  recipient: string;
}

