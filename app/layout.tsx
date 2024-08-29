import AppHeader from "./components/AppHeader";
import "./main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<meta name="description" content="On The Edge IT Solutions website." />
			<title>On The Edge | IT Solutions</title>
		</head>
		<body className="bg-white dark:bg-gray-900">
			<AppHeader />
			{children}
			{/* <AppFooter /> */}
		</body>
	</html>
  );
}
