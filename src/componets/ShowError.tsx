
const ShowError = ({ error }: { error : string }) => {
  return (
    <div className='h-full w-full flex-col flex justify-center items-center'>

     <img className="w-8/12 md:w-80 " src='/error.png' />
     <h2 className="text-xl text-center" > A ocurrido un error</h2>
      <p className="text-red-600" >{error}</p>

    </div>
  )
};

export default ShowError