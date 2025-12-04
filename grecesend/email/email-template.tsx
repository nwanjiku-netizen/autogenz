import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>you have a message from, {name}!</h1>
      <p>message: {message}</p>
      <p>email:{email}</p>
    </div>
  );
}
