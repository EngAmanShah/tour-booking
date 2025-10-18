import { SignInForm } from "@/components/auth/signin-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your RoamWise account to continue your travel journey"
      footerText="Don't have an account?"
      footerLinkText="Sign up here"
      footerLinkHref="/auth/signup"
    >
      <SignInForm />
    </AuthLayout>
  )
}
