import { SignUpForm } from "@/components/auth/signup-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Join RoamWise"
      subtitle="Create your account and start exploring amazing destinations"
      footerText="Already have an account?"
      footerLinkText="Sign in here"
      footerLinkHref="/auth/signin"
    >
      <SignUpForm />
    </AuthLayout>
  )
}
