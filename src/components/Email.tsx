import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import emailLogo from "../../public/email-teeth-logo.png";

interface EmailTemplateProps {
  name?: string;
  email?: string;
  message?: string;
}

const baseUrl = "http://localhost:3000/";

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  const previewText = `Read ${name}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={namebutton}>👩‍⚕️ Diana Zarowsky Dental Studio 🪥</Text>
          </Section>

          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Here&apos;s what {name} wrote: </Text>
              <Text style={review}>{message}</Text>

              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                If you want to response to {name} click on the button below 👇
              </Text>

              <Button style={button} href={`mailto:${email}`}>
                Reply to clients email
              </Button>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={{ ...paragraph, fontWeight: "700" }}>
                Have a nice day!
              </Text>

              <Hr style={hr} />
              <Text style={footer}>
                Dental Studio, 585 Anette Srteet, Unit B, Toronto, Ontarion, M6S
                2C3
              </Text>
              <Link
                href="https://support.google.com/mail/answer/8151?sjid=5223956102672362552-NC"
                style={reportLink}
              >
                Report unsafe behavior
              </Link>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

EmailTemplate.PreviewProps = {
  authorName: "Alex",
  authorImage: `${baseUrl}/static/airbnb-review-user.jpg`,
  reviewText: `“Alan was a great guest! Easy communication, the apartment was left
		in great condition, very polite, and respectful of all house rules.
		He’s welcome back anytime and would easily recommend him to any
		host!”`,
};

export default EmailTemplate;

const main = {
  backgroundColor: "#EEEEEE",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#222831",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#222831",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#00ADB5",
  borderRadius: "10px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const namebutton = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#222831",
  textAlign: "center" as const,
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#222831",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
