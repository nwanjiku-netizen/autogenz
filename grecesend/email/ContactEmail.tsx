// emails/ContactEmail.tsx
import * as React from "react";
import { Html, Head, Body, Container, Text } from "@react-email/components";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({ name, email, message }: Props) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
            New Contact Form Message
          </Text>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
