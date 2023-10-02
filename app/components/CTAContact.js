import Image from "next/image"

const CTAContact = () => {
  return (
<div className='card p-5 w-full rounded-lg flex flex-col mb-4 text-center'>
    <p className='text-lg mb-2'>¿Necesitas ayuda con tu código?</p>
    <Image width={80} height={80} src='/headset-7727268_1280.png' alt='supportImg' className='h-[80px] w-[80px] mb-4 mx-auto'/>
    <p className='text-lg mb-4'>Programa una asesoría.</p>
    <div className='text-center'>
        <button className='text-white w-full bg-yellow-500 px-5 py-3 rounded-lg'>
            Contacto
        </button>
    </div>
</div>
  )
}

export default CTAContact