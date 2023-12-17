import { MessageStatus } from "./MessageStatus";

export interface Message {
  text: string;
  status: MessageStatus;
}

export type MessageContext = {
  message: Message | null;
  addMessage: (text: string, status: MessageStatus) => void;
  removeMessage: () => void;
};
