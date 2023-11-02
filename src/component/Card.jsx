
const Card = () => {
  return (
    <div className='h-72 w-64 bg-slate-100 mt-8 mb-6'>
      <div className="h-24 w-24  mt-4 ml-6">
        <div className="h-24 w-24 border-4 rounded-full border-blue-900 flex justify-center items-center">
            <text className="font-bold text-2xl font-[Poppins]">01</text>
        </div>
        <div className="h-20 w-48 flex items-center">
            <h1 className="text-black text-3xl font-bold font-[Poppins]">Call Service</h1>
        </div>
        <div className="h-10 w-48">
            <h1 className="text-white cursor-pointer font-[Poppins]"><u className="text-blue-900">LEARN MORE</u></h1>
        </div>
      </div>
    </div>
  )
}

export default Card
