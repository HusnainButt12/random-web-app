import Card from './component/Card'

const App = () => {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-black flex  justify-center items-center">
      <div className=" w-[100vw] bg-blue-800 flex justify-center items-center">
        <div className=" w-[90vw] ">
          <div className="py-5 w-auto flex text-center ">
            <text className="text-5xl font-bold text-white font-[Poppins]">
              What Does We Do?
            </text>
          </div>
          <div className="min-h-full max-w-[899px]">
            <text className="text-white font-[Poppins]">
              Ut porttitor leo a diam sollicitudin. Turpis in eu mi bibendum
              neque <u className="cursor-pointer">egestas congue</u> . Viverra adipiscing at in tellus integer.
              Est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis. Mattis enim ut tellus elementum sagittis. Aliquam ut
              porttitor leo a diam sollicitudin tempor id eu.
            </text>
          </div>
          <div className="h-[70%] w-auto flex flex-wrap justify-center  items-center gap-5">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

