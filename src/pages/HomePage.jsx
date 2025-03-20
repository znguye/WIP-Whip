import Footer from '../components/Footer'
import Kanban from '../components/Kanban'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function HomePage() {

  return (
    <>
      <Navbar />
      <Kanban />
      <Sidebar />
      <Footer />
    </>
  )
}