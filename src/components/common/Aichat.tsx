"use client";

import { useRef, useState, useEffect } from "react";
import { Input, Button, Avatar, Alert, Spin, Drawer, FloatButton } from "antd";
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
  const [open, setOpen] = useState(false);
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

      if (!res.ok || !res.body) {
        setStatus("error");
        return;
      }

      // Add an empty assistant bubble that we'll fill in as chunks arrive
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;
          updated[lastIndex] = {
            ...updated[lastIndex],
            content: updated[lastIndex].content + chunkText,
          };
          return updated;
        });
      }

      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  const handleSend = () => sendMessage(input);

  return (
    <>
      {" "}
      <FloatButton
        icon={<RobotOutlined style={{}} />}
        onClick={() => setOpen(true)}
        tooltip="Farsah AI"
        rootClassName={styles.aiFloatButton}
      />
      <Drawer
        title={
          <div className={styles.drawerHeader}>
            <Avatar
              size={40}
              icon={<RobotOutlined />}
              className={styles.headerAvatar}
            />
            <div className={styles.headerText}>
              <span className={styles.headerName}>
                {siteConfig.name} Assistant
              </span>
              <span className={styles.headerStatus}>
                <span className={styles.statusDot} /> Online
              </span>
            </div>
          </div>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={420}
        className={styles.drawer}
      >
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
                        msg.role === "user" ? (
                          <UserOutlined />
                        ) : (
                          <RobotOutlined />
                        )
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
                  <div
                    className={`${styles.messageRow} ${styles.assistantRow}`}
                  >
                    <Avatar
                      size={32}
                      icon={<RobotOutlined />}
                      className={styles.assistantAvatar}
                    />
                    <div
                      className={`${styles.bubble} ${styles.assistantBubble}`}
                    >
                      <span className={styles.typingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
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
              placeholder="Ask about programs, tutors..."
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
              // loading={status === "loading"}
              disabled={!input.trim()}
            ></Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
