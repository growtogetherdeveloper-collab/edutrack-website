"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form@7.55.0"
import { z } from "zod"
import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner@2.0.3"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  country: z.string().min(2, {
    message: "Country is required.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  schoolOrOthers: z.string().min(2, {
    message: "School or Organization name is required.",
  }),
  message: z.string().optional(),
})

export function RequestDemoForm({ className, onSuccess }: { className?: string, onSuccess?: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      schoolOrOthers: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      
      // If URL is not set or is the placeholder, try the local API
      const targetUrl = (sheetUrl && sheetUrl !== "YOUR_DEPLOYED_WEB_APP_URL_HERE") 
        ? sheetUrl 
        : "/api/leads";

      const response = await fetch(targetUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(values),
      });

      if (!response.ok && response.status !== 0) {
        throw new Error(`Server returned ${response.status}`);
      }
      
      toast.success("Request submitted!", {
        description: "We'll be in touch shortly to schedule your demo.",
      })
      setIsSubmitted(true);
      form.reset();
      if (onSuccess) onSuccess();
      
      // Reset submission state after 3 seconds so they can submit again if needed
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Submission failed", {
        description: error.message || "Please try again later.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-5 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#042365] font-semibold text-xs uppercase tracking-wider">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" className="bg-white border-gray-200 focus:border-blue-500 rounded-lg h-10 px-4" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#042365] font-semibold text-xs uppercase tracking-wider">Work Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@school.edu" className="bg-white border-gray-200 focus:border-blue-500 rounded-lg h-10 px-4" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#042365] font-semibold text-xs uppercase tracking-wider">Country/Region</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. India, UAE" className="bg-white border-gray-200 focus:border-blue-500 rounded-lg h-10 px-4" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#042365] font-semibold text-xs uppercase tracking-wider">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" className="bg-white border-gray-200 focus:border-blue-500 rounded-lg h-10 px-4" {...field} />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="schoolOrOthers"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#042365] font-semibold text-xs uppercase tracking-wider">School/Organization</FormLabel>
              <FormControl>
                <Input placeholder="Name of your institution" className="bg-white border-gray-200 focus:border-blue-500 rounded-lg h-10 px-4" {...field} />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#042365] font-semibold text-xs uppercase tracking-wider">How can we help you?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your requirements (at least 30 characters recommended)..."
                  className="resize-none min-h-[90px] bg-white border-gray-200 focus:border-blue-500 rounded-lg p-4"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#042365] hover:bg-blue-900 h-12 text-white font-bold text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-blue-900/20 active:scale-[0.98]"
        >
          {form.formState.isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing...
            </span>
          ) : isSubmitted ? (
            <span className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5 stroke-[3px]" />
              Done
            </span>
          ) : "Submit Request"}
        </Button>
      </form>
    </Form>
  )
}
