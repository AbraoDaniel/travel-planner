import { ArrowRight, UserRoundPlus } from "lucide-react"

interface IGuestInput {
  emailsToInvite: string[]
  handleOpenGuestModal: () => void
}

const GuestInput: React.FC<IGuestInput> = ({
  emailsToInvite,
  handleOpenGuestModal
}) => {
  return (<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
  <button onClick={handleOpenGuestModal} type="button" className='flex items-center gap-2 flex-1'>
    <UserRoundPlus  className="size-5 text-zinc-400"/>
    {emailsToInvite?.length > 0 ? (`${emailsToInvite?.length} pessoa(s) convidada(s)`) : (
      <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>
    )}
  </button>

  <div className='w-px h-6 bg-zinc-800'/>

  <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
    Confirmar viagem
    <ArrowRight className='size-5'/>
  </button>
</div>)
}

export default GuestInput