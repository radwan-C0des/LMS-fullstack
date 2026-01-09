"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import {  Loader2 } from "lucide-react";
import {  useRouter, useSearchParams } from "next/navigation";
import {  useState, useTransition } from "react";
import { toast } from "sonner";


export default function VarifyRequestPage() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [emailPending, startTransition] =useTransition()
    const params =useSearchParams();
    const email = params.get("email") as string;
    const isOptComplete = otp.length === 6;

    function verifyOTP() {
        startTransition(async () =>{
            await authClient.signIn.emailOtp({
                email: email,
                otp: otp,
                fetchOptions:{
                    onSuccess: ()=>{
                        toast.success("Successfully verified OTP");
                        router.push("/");
                    },
                    onError: ()=>{
                        toast.error("Invalid OTP. Please try again.")
                    }
                }
            })
        })

    }
    return(
        <Card className="w-full mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Please check your email for the verification OTP</CardTitle>
                <CardDescription>We have sent a verification OTP to your email address. Please check your inbox and enter the OTP to continue.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex justify-center items-center flex-col space-y-2">
                    <InputOTP value={otp} onChange={(value) => setOtp(value) } maxLength={6} className="gap-2">
                        <InputOTPGroup>
                            <InputOTPSlot index={0}/>
                            <InputOTPSlot index={1}/>
                            <InputOTPSlot index={2}/>
                        </InputOTPGroup>
                        <InputOTPGroup>
                            <InputOTPSlot index={3}/>
                            <InputOTPSlot index={4}/>
                            <InputOTPSlot index={5}/>
                        </InputOTPGroup>
                    </InputOTP>
                    <p className="text-center text-sm text-muted-foreground">Enter the 6 digit code we sent to your email address</p>
                </div>
                <Button 
                onClick={verifyOTP} 
                disabled={emailPending || !isOptComplete} 
                className="w-full">
                    {emailPending ? (<><Loader2 className="size-4 animate-spin"></Loader2> <span>Loading...</span></>): ("Verify OTP")}
                </Button>
            </CardContent>

        </Card>
    )
}