export default function RootLayout({ header, children, footer }) {
  return (
    <html lang="en">
      <body>
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
      </body>
    </html>
  );
}
