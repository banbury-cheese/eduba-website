import "./global.scss";

export const metadata = {
  title: "Eduba",
  description: "The faces of interfaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
