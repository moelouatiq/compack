import Navbar from "@/components/solatera/Navbar"

export const metadata = {
  title: "SOLATERA — Village Écologique Inclusif à Marrakech",
  description: "Éco-village à Marrakech. Hébergement en dômes, bien-être, activités, et engagement social.",
}

export default function SolateraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
