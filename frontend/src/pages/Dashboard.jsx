import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


function Dashboard() {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  },[user])


  return (
   <>
    <section className='heading'>
      <h1>
        Welcome {user && user.name}
        <p>Dashboard</p>
      </h1>
    </section>
   </>
  )
}

export default Dashboard