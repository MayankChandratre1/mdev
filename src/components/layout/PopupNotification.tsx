import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'

const PopupNotification = ({message, success}:{
    message:string,
    success:boolean
}) => {
  return (
    <div className={`fixed top-2 m-5 p-3 z-30 rounded-md shadow-md  animate-bounce flex items-center gap-2 text-white ${success ? "bg-green-500":"bg-red-500"}`}>{success? <CheckCircledIcon />:<CrossCircledIcon/>}{message}</div>
  )
}

export default PopupNotification