import Link from "next/link"
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons"
import { cn } from "@/lib/utils";

const Signature = ({ textColor }: { textColor: "text-white" | "text-black" }) => {
  return (
    <div className="fixed bottom-2 w-full flex justify-center items-center gap-4 z-40">
      <Link
        href="https://github.com/renexe/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-xs hover:underline", textColor)}
      >
        Desenvolvido por Renê Lima
      </Link>
      <Link
        href="https://www.linkedin.com/in/renlima/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-sm transition-transform hover:scale-110", textColor)}
      >
        <LinkedInLogoIcon />
      </Link>
      <Link
        href="https://github.com/renexe/pontua-test"
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-sm transition-transform hover:scale-110", textColor)}
      >
        <GitHubLogoIcon />
      </Link>
    </div>
  )
}

export default Signature;