"use client";

import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { SendOutlined } from "@ant-design/icons";
import styles from "./contactform.module.css";

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

/**
 * Ant `Form` handles client-side validation (required fields, email
 * format). `handleSubmit` posts to `/api/contact`, a server-side route
 * that emails a notification via Resend — the API key never reaches
 * the browser. Loading/success/error are separate UI states, and raw
 * error details from the server are never shown to the user.
 */
export default function ContactForm() {
  const [form] = Form.useForm<ContactFormValues>();
  const [status, setStatus] = useState<SubmitState>("idle");

  const handleSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { success: boolean } = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.resetFields();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Send Us a Message</h2>
      <p className={styles.intro}>
        Fill out the form and our team will get back to you shortly.
      </p>

      {status === "success" && (
        <Alert
          type="success"
          showIcon
          message="Message sent"
          description="Thanks for reaching out — we'll respond within one business day."
          className={styles.alert}
          closable
          onClose={() => setStatus("idle")}
        />
      )}

      {status === "error" && (
        <Alert
          type="error"
          showIcon
          message="Something went wrong"
          description="Your message couldn't be sent right now. Please try again in a moment."
          className={styles.alert}
          closable
          onClose={() => setStatus("idle")}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
        disabled={status === "loading"}
      >
        <div className={styles.row}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your full name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email address" },
            ]}
          >
            <Input placeholder="you@example.com" />
          </Form.Item>
        </div>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: "Please enter a message" }]}
        >
          <TextArea rows={5} placeholder="Tell us how we can help..." />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          icon={<SendOutlined />}
          loading={status === "loading"}
          block
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </div>
  );
}
