export const Modal = ({ open, onClose, project: {name, image, description} }) => {
    return (
        <div onClick={onClose} className={`fixed  inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black" : "invisible"}`}>
            <div className={`rounded-xl  shadow p-6 transition-all flex flex-col justify-center items-center ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button onClick={onClose} className="absolute -top-2 -right-2 p-2 rounded-xl text-5xl text-gray-400 cursor-pointer hover:text-gray-600">&times;</button>
                <div className="flex flex-col items-center">
                    <img className="h-150 w-300 object-contain" src={image} alt="" />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}