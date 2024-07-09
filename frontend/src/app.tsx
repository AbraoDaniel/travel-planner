import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import GuestInputModal from './components/GuestInputModal'
import GuestInput from './components/GuestInput'
import InputActionButton from './components/InputActionButton'
export function App() {
  const [showGuestInput, setShowGuestInput] = useState(false)
  const [showGuestInputModal, setShowGuestInputModal] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState([] as string[])


  function handleOpenGuestInput() {
    setShowGuestInput(true)
  }
  function handleOpenGuestModal() {
    setShowGuestInputModal(true)
  }
  function handleCloseGuestInput() {
    setShowGuestInput(false)
  }
  function handleCloseGuestModal() {
    setShowGuestInputModal(false)
  }
  function handleAddEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data?.get('email')?.toString()
    if (!email || emailsToInvite?.includes(email)) {
      return
    }
    setEmailsToInvite(state => {
      return [...state, email]
    })
    event.currentTarget.reset()
  }

  function handleRemoveEmailFromInvites(emailToExclude: string) {
    const newInviteArray = emailsToInvite?.filter((email) => email !== emailToExclude)
    setEmailsToInvite(newInviteArray)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin  className="size-5 text-zinc-400"/>
              <input disabled={showGuestInput} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <div className='flex items-center gap-2'>
              <Calendar  className="size-5 text-zinc-400"/>
              <input disabled={showGuestInput} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
            </div>

            <div className='w-px h-6 bg-zinc-800'/>

            <InputActionButton 
              showGuestInput={showGuestInput}
              handleOpenGuestInput={handleOpenGuestInput}
              handleCloseGuestInput={handleCloseGuestInput}
            />
          </div>

          {showGuestInput && (
            <GuestInput 
              emailsToInvite={emailsToInvite}
              handleOpenGuestModal={handleOpenGuestModal}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm" >Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a></p>
      </div>

      {showGuestInputModal && (
        <GuestInputModal 
          emailsToInvite={emailsToInvite}
          handleCloseGuestModal={handleCloseGuestModal}
          handleAddEmailToInvite={handleAddEmailToInvite}
          handleRemoveEmailFromInvites={handleRemoveEmailFromInvites}
        />
      )}
    </div>
  )
}
