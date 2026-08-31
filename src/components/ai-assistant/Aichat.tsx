"use client";

import { useRef, useState, useEffect } from "react";
import { Input, Button, Avatar, Alert, Spin } from "antd";
import { SendOutlined, RobotOutlined, UserOutlined } from "@ant-design/icons";
import { aiSuggestedPrompts, siteConfig } from "@/data/site";
import styles from "./aichat.module.css";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

type RequestState = "idle" | "loading" | "error";

/**
 * Client component owning all chat state (messages, input, request
 * status) and talking to /api/ai-assistant. The empty state shows the
 * welcome message + suggested prompts (Section 23); once a message is
 * sent, the conversation view takes over. Errors from the server are
 * shown inline without exposing technical details.
 */
export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<RequestState>("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, status]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || status === "loading") return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setStatus("loading");

    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const data: { success: boolean; reply?: string } = await res.json();

      if (!res.ok || !data.success || !data.reply) {
        setStatus("error");
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply as string },
      ]);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  const handleSend = () => sendMessage(input);

  return (
    <div className={styles.wrap}>
      <div className={styles.messages} ref={scrollRef}>
        {messages.length === 0 ? (
          <div className={styles.empty}>
            <Avatar
              size={56}
              icon={<RobotOutlined />}
              className={styles.emptyAvatar}
            />
            <h2 className={styles.emptyTitle}>
              Hi, I&apos;m the {siteConfig.name} Assistant
            </h2>
            <p className={styles.emptyDesc}>
              Ask me about programs, subjects, tutors, or how FARSAH Tutors
              works.
            </p>
            <div className={styles.suggestions}>
              {aiSuggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className={styles.suggestionChip}
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.thread}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${styles.messageRow} ${
                  msg.role === "user" ? styles.userRow : styles.assistantRow
                }`}
              >
                <Avatar
                  size={32}
                  icon={
                    msg.role === "user" ? <UserOutlined /> : <RobotOutlined />
                  }
                  className={
                    msg.role === "user"
                      ? styles.userAvatar
                      : styles.assistantAvatar
                  }
                />
                <div
                  className={`${styles.bubble} ${
                    msg.role === "user"
                      ? styles.userBubble
                      : styles.assistantBubble
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {status === "loading" && (
              <div className={`${styles.messageRow} ${styles.assistantRow}`}>
                <Avatar
                  size={32}
                  icon={<RobotOutlined />}
                  className={styles.assistantAvatar}
                />
                <div className={`${styles.bubble} ${styles.assistantBubble}`}>
                  <Spin size="small" />{" "}
                  <span className={styles.typing}>Thinking...</span>
                </div>
              </div>
            )}
          </div>
        )}

        {status === "error" && (
          <Alert
            type="error"
            showIcon
            message="Something went wrong"
            description="The AI Assistant couldn't respond right now. Please try again in a moment."
            className={styles.alert}
            closable
            onClose={() => setStatus("idle")}
          />
        )}
      </div>

      <div className={styles.inputRow}>
        <Input
          size="large"
          placeholder="Ask about programs, tutors, or how it works..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPressEnter={handleSend}
          disabled={status === "loading"}
          className={styles.input}
        />
        <Button
          type="primary"
          size="large"
          icon={<SendOutlined />}
          onClick={handleSend}
          loading={status === "loading"}
          disabled={!input.trim()}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
