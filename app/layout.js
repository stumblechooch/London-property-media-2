export const metadata = {
  title: "London Property Media",
  description: "Property photography, floor plans and EPC services in London."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
