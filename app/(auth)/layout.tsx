import Link from "next/link"
import { ReactNode } from "react"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import logo from "@/public/bash-seeklogo.png"
import Image from "next/image"


function Authlayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex min-h-svh justify-center items-center flex-col">

            <Link href="/" className={buttonVariants({
                variant: "outline",
                className: "absolute top-4 left-4"
            })}>
                <ArrowLeft className="size-4" />
                Back</Link>
            <div className="flex flex-col gap-6 w-full max-w-sm">
                <Link
                    href="/"
                    className="flex items-center gap-4 self-center font-medium"
                >
                    <Image src={logo} alt="Logo" width={40} height={40} />
                    Radwan-LMS.</Link>

                {children}
                <div className="text-balance text-center text-xs text-muted-foreground">
                    By clicking continue, you agree to our <span className="hover:underline hover:text-primary">Terms of Service </span>{""} and <span className="hover:underline hover:text-primary"> Privacy Policy</span>
                </div>
            </div>
        </div>
    )

}

export default Authlayout