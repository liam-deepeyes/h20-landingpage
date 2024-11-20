import './App.css'
import { motion } from 'framer-motion'
import { SOCIAL_NETWORKS } from './constants/SocialNetwork'
import logoCetus from './assets/logo_cetus.png'
import logoDexScreener from './assets/logo_dex_screener.png'
import logo from './assets/logo.png'
import backgroundVideo from './assets/ocean-waves-background.mov'
function App() {
  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  return (
    <>
      <div className='absolute inset-0'>
        <video autoPlay loop muted className='w-full h-full object-cover opacity-75'>
          <source src={backgroundVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='w-screen h-screen bg-transparent flex justify-center items-center'>
        <div className='flex md:flex-row flex-col max-w-5xl'>
          <div className='md:w-1/2 w-full md:h-full h-1/4 flex justify-center'>
            <motion.img
              src={logo}
              alt='FLX Logo'
              className='md:w-full w-2/3'
              variants={{
                hidden: { rotate: 0 },
                visible: {
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 1, repeat: Infinity }
                }
              }}
              initial='hidden'
              animate='visible'
            />
          </div>
          <div className='md:w-1/2 w-full md:h-auto h-2/2 flex flex-col gap-2 justify-start md:p-10 px-4 md:py-10 z-50 text-white items-center text-center'>
            <h1>
              💦 <span className='text-white text-7xl'>$H2O</span> 💦
            </h1>
            <h2 className='md:text-2xl text-xl'>The first DeSci token on $SUI🫧⋆˚</h2>
            <span className='md:text-2xl text-xl'>65% of your body is water, so why not bag H2O? 🌊</span>
            <div className='flex md:flex-row flex-col w-full justify-between items-center'>
              <span className='text-sm text-blue-400'>Contract address</span>
              <span
                className='text-sm text-blue-400'
                onClick={() => {
                  window.open(SOCIAL_NETWORKS.BUY_NOW, '_blank')
                }}
              >
                {SOCIAL_NETWORKS.CA || '...'}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(SOCIAL_NETWORKS.CA)
                }}
                className='text-xs bg-blue-400 text-white rounded px-4 py-2'
              >
                Copy
              </button>
            </div>
            <motion.div className='flex justify-center my-6 space-x-12' variants={containerVariants}>
              <motion.a
                href={SOCIAL_NETWORKS.X}
                target='_blank'
                rel='noopener noreferrer'
                className='w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300 hover:bg-black/80 active:bg-black/60'
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className='icon-[simple-icons--x] w-6 h-6 md:w-12 md:h-12 text-white'></span>
              </motion.a>
              <motion.a
                href={SOCIAL_NETWORKS.TELEGRAM}
                target='_blank'
                rel='noopener noreferrer'
                className='w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white bg-[#0088cc] flex items-center justify-center transition-all duration-300 hover:bg-[#0088cc]/80 active:bg-[#0088cc]/60'
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className='icon-[mdi--telegram] w-8 h-8 md:w-16 md:h-16 text-white'></span>
              </motion.a>
              <motion.a
                href={SOCIAL_NETWORKS.CETUS_FINANCE}
                target='_blank'
                rel='noopener noreferrer'
                className='w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:opacity-80 active:opacity-60'
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={logoCetus} alt='FlowX Finance' className='w-full h-full object-cover rounded-full' />
              </motion.a>
              <motion.a
                href={SOCIAL_NETWORKS.DEX_SCREENER}
                target='_blank'
                rel='noopener noreferrer'
                className='w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:opacity-80 active:opacity-60'
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={logoDexScreener} alt='DexScreener' className='w-full h-full object-cover rounded-full' />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
