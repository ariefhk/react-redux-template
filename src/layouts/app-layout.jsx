import TopLoadingBar from "@/components/common/top-loading-bar"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <>
      <TopLoadingBar />
      <main className="font-inter">
        <Outlet />
      </main>
    </>
  )
}
