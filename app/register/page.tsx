import Image from "next/image"
import { RegisterForm } from "@/components/register-form"

export default function Page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel */}
        <div className="order-2 flex items-center justify-center p-8 md:p-12 lg:order-1 bg-background">
          <div className="w-full text-center lg:text-left">
            <div className="relative mx-auto w-[500px] md:w-[650px] lg:w-[700px] aspect-[4/3]">
              <Image
                src="/images/login_register.png"
                alt="Three people waving, welcoming the user"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="order-1 lg:order-2 bg-brand text-brand-foreground rounded-none lg:rounded-s-3xl px-6 py-10 md:px-10 md:py-14 flex items-center justify-center overflow-y-auto">
          <div className="w-full max-w-3xl">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8">Register</h2>
            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  )
}