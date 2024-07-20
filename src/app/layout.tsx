import { cn } from "@/lib/utils";
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
{/*       <head>
      <script id="chatflot" dangerouslySetInnerHTML={{
					__html: `
     window.chatbotConfig = {
chatbotId: 'cly6s9ink00018msf58ekx645',
}
     `}}> 

      
      </script>
      </head> */}
      <body className={cn("dark", openSans.className)}>
        {children}

{/*         <script async src="https://app.chatflot.com/chatwindow.js"></script> */}

{/*         <div id="chatflot-chatbot"> </div> */}

{/*         <script async src="https://app.chatflot.com/chatbot.js"></script> */}
      </body>
    </html>
  );
}
