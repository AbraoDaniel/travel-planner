import { ArrowRight, Settings2 } from "lucide-react"

interface IInputActionButton {
  showGuestInput: boolean
  handleOpenGuestInput: () => void
  handleCloseGuestInput: () => void
}

const InputActionButton: React.FC<IInputActionButton> = ({
  showGuestInput,
  handleOpenGuestInput,
  handleCloseGuestInput
}) => {
  return showGuestInput ? (
      <button onClick={handleCloseGuestInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
        Alterar local/data
        <Settings2 className="size-5"/>
      </button>
      
  ) : (
    <button onClick={handleOpenGuestInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
    Continuar
    <ArrowRight className='size-5'/>
    </button>
  )
}

export default InputActionButton