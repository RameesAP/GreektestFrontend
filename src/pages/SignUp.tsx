// import React, { useState } from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const [name,setName]=useState('')
    const [password,setPassword]= useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [profession,setProfession]=useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSignup = (e:React.FormEvent)=>{
        e.preventDefault()
        if(!name || !password || !email || !phone || !profession){
            setError("All Fields are required")
            return
        }
        const userData = {name,password,email,phone,profession}
        localStorage.setItem('userData',JSON.stringify(userData))
        navigate("/login");
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      {error && <p className="text-red-500 text-center" role="alert">{error}</p>}
      <form onSubmit={handleSignup} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="profession">Profession</Label>
          <Select value={profession} onValueChange={setProfession}>
            <SelectTrigger id="profession">
              <SelectValue placeholder="Select profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
  </div>
  )
}

export default SignUp