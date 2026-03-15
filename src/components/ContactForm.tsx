import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./ContactForm.css"

type FormStatus = {
  type: "success" | "error"
  message: string
} | null

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [result ,setResult] = useState<FormStatus>(null)
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!formRef.current?.checkValidity()) {
            formRef.current?.reportValidity()
            return
        }

        try { 
            await emailjs.sendForm(
                "service_k1i50up",
                "template_hc48994",
                formRef.current!,
                "Q5Ztx5pAS5z8gSFkK"
            )

            setResult({
                type: "success",
                message: "Message sent successfully!"
            })

            formRef.current?.reset()
        }
        catch {
            setResult({
                type: "error",
                message: "Something went wrong, please try again."
            })
        }
    }

  return (
    <form 
        className="form squircle-xl"
        onSubmit={handleSubmit}
        ref={formRef}
        aria-labelledby="contact-heading"
    >
        {result && (
            <p
            className={`form-result form-result--${result.type}`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            >
            {result.message}
            </p>
        )}
        <input 
            type="text" 
            name="company"
            className="honeypot" 
            tabIndex={-1}
            autoComplete="none"
            aria-hidden="true"
        />

        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            name="name"
            id="name"
            className="squircle-xl"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby="name-error"
        />
        <span id="name-error" role="alert" aria-live="polite" />

        <label htmlFor="email">E-mail</label>
        <input 
            type="email" 
            name="email"
            id="email"
            className="squircle-xl"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby="email-error"
        />
        <span id="email-error" role="alert" aria-live="polite" />

        <label htmlFor="phone">Phone</label>
        <input 
            type="tel" 
            name="phone" 
            id="phone"
            pattern="[0-9+() /-]*"
            className="squircle-xl"
            autoComplete="tel"
            aria-describedby="phone-error"
        />
        <span id="phone-error" role="alert" aria-live="polite" />

        <label htmlFor="message">Message</label>
        <textarea 
            name="message" 
            id="message"
            className="squircle-xl"
            rows={4}
            required
            aria-required="true"
            aria-describedby="message-error"
        ></textarea>
        <span id="message-error" role="alert" aria-live="polite" />

        <input 
            type="submit" 
            value="Send"
            className="form-submit squircle-xl" 
        />
    </form>
  )
}

export default ContactForm
