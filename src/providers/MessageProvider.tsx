import { createContext, useState, useCallback } from "react";
import { MessageStatus } from "../types/MessageStatus";
import { Message, MessageContext } from "../types/Message";

export const MessageProviderContext = createContext<MessageContext>({
  message: null,
  addMessage: () => {},
  removeMessage: () => {},
});

function MessageProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<Message | null>(null);

  const removeMessage = () => setMessage(null);

  const addMessage = (text: string, status: MessageStatus) =>
    setMessage({ text, status });

  const contextValue: MessageContext = {
    message,
    addMessage: useCallback(
      (text: string, status: MessageStatus) => addMessage(text, status),
      []
    ),
    removeMessage: useCallback(() => removeMessage(), []),
  };

  console.log(contextValue);

  return (
    <MessageProviderContext.Provider value={contextValue}>
      {children}
    </MessageProviderContext.Provider>
  );
}

export default MessageProvider;
