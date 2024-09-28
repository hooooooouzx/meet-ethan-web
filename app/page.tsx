import Image from "next/image";
import { inter } from '@/app/ui/fonts';


export default function Home() {
  return (
    <div className={`${inter.className} antialiased`}>
      Welcome to Ethan's Personal Website!
    </div>
  );
}
