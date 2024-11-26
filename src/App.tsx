import './App.css'
import { motion } from 'framer-motion'
import { SOCIAL_NETWORKS } from './constants/SocialNetwork'
import logoCetus from './assets/logo_cetus.png'
import logoDexScreener from './assets/logo_dex_screener.png'
import logo from './assets/logo.png'
import backgroundVideo from './assets/ocean-waves-background.mp4'
import { useMemo } from 'react'
import { IMAGES } from './assets/gallery'
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
  const gallery = useMemo(() => {
    return (
      <div className='flex flex-wrap items-center z-20'>
        {IMAGES.map((i) => (
          <div className='md:w-1/4 w-1/2 p-2'>
            <motion.img
              src={i}
              className='w-full h-auto border-2 border-white rounded-2xl'
              whileHover={{ scale: 1.05 }} // Thêm hiệu ứng zoom khi hover
              initial={{ opacity: 0, y: 20 }} // Bắt đầu với opacity 0 và dịch chuyển xuống
              whileInView={{ opacity: 1, y: 0 }} // Hiện ảnh khi cuộn đến
              transition={{ duration: 0.3 }} // Giảm thời gian animation
              viewport={{ once: false }} // Đảm bảo animation xảy ra mỗi khi ảnh vào view
            />
          </div>
        ))}
      </div>
    )
  }, [])
  const renderTextDivs = useMemo(() => {
    return Array.from({ length: 10 }).map((_, index) => {
      const randomTopPosition = Math.random() * 20 // Tạo vị trí top ngẫu nhiên từ 0 đến 80% (để tránh ra ngoài màn hình)
      const randomFontSize = Math.random() * (8 - 4) + 4 // Tạo kích thước font ngẫu nhiên từ 4rem đến 8rem
      const direction = Math.random() < 0.5 ? '-100vw' : '100vw' // Chọn hướng ngẫu nhiên (trái hoặc phải)
      // Kiểm tra kích thước màn hình để điều chỉnh kích thước font
      const isMobile = window.innerWidth < 768 // Giả sử kích thước mobile là dưới 768px
      const fontSize = isMobile ? randomFontSize * 0.5 : randomFontSize // Giảm kích thước font cho mobile
      const randomDurationX = Math.random() * (20 - 10) + 10 // Tạo thời gian ngẫu nhiên từ 10 đến 20 giây
      const randomDurationY = Math.random() * (5 - 2) + 2 // Tạo thời gian ngẫu nhiên cho y từ 2 đến 5 giây

      return (
        <motion.div
          key={index} // Thêm key cho mỗi div
          className='absolute z-100 text-white'
          style={{ fontSize: `${fontSize}rem`, top: `${randomTopPosition}%` }} // Đặt vị trí top ngẫu nhiên
          initial={{ x: direction, y: 0, opacity: 0 }} // Bắt đầu bên trái
          exit={{ x: '100vw', opacity: 0 }} // Biến mất khi thoát
          animate={{
            x: [direction, direction === '-100vw' ? '100vw' : '-100vw'],
            y: ['0%', '35%', '0%'],
            opacity: 0.6
          }}
          transition={{
            x: { duration: randomDurationX, repeat: Infinity, ease: 'linear' },
            y: { duration: randomDurationY, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          H2 + O2 = H2O
        </motion.div>
      )
    })
  }, []) // Chỉ chạy một lần khi component mount
  return (
    <div className='relative w-full h-full'>
      <div className='absolute inset-0 w-full bg-[#000a25]'>
        <video autoPlay loop muted className='w-full h-screen object-cover z-0'>
          <source src={backgroundVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='w-screen h-full bg-transparent flex justify-center items-center z-20'>
        <div className='flex flex-col h-full max-w-5xl'>
          <div className='flex md:flex-row flex-col z-30'>
            <motion.div
              className='md:w-1/2 w-full md:h-full h-1/4 flex justify-center'
              initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
              whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
              transition={{ duration: 1 }} // Thời gian animation
              viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
            >
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
            </motion.div>
            <div className='md:w-1/2 w-full md:h-auto h-2/2 flex flex-col gap-2 justify-start md:p-10 px-4 md:py-10 z-50 text-white items-center text-center'>
              <motion.h1
                initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                transition={{ duration: 1 }} // Thời gian animation
                viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
              >
                💦 <span className='text-white text-6xl'>$H2O</span> 💦
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: 100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                transition={{ duration: 1 }} // Thời gian animation
                viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
                className='md:text-2xl text-xl'
              >
                The first DeSci token on $SUI🫧⋆˚
              </motion.h2>
              <motion.span
                className='md:text-2xl text-xl'
                initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                transition={{ duration: 1 }} // Thời gian animation
                viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
              >
                65% of your body is water, so why not bag H2O? 🌊
              </motion.span>
              <motion.div
                className='flex md:flex-row flex-col w-full justify-between items-center bg-black rounded-lg bg-opacity-30 px-5 py-2'
                initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                transition={{ duration: 1 }} // Thời gian animation
                viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
              >
                <span className='text-sm text-white'>Contract address</span>
                <span
                  className='text-sm text-white'
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
              </motion.div>
              <motion.div
                className='flex md:flex-row flex-col w-full justify-evenly items-center bg-slate-100 rounded-lg bg-opacity-50'
                initial={{ opacity: 0, y: 20 }} // Bắt đầu với opacity 0 và dịch chuyển xuống
                whileInView={{ opacity: 1, y: 0 }} // Hiện ảnh ngay khi cuộn đến
                transition={{ duration: 1 }} // Giảm thời gian animation
                viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
              >
                <span className='text-lg text-blue-900'>Total Supply</span>
                <span
                  className='text-5xl text-blue-900'
                  onClick={() => {
                    window.open(SOCIAL_NETWORKS.BUY_NOW, '_blank')
                  }}
                >
                  {SOCIAL_NETWORKS.TOTAL_SUPPLY || '...'}
                </span>
              </motion.div>
              <motion.div className='flex justify-center my-6 space-x-6' variants={containerVariants}>
                <motion.a
                  href={SOCIAL_NETWORKS.X}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white bg-black flex items-center justify-center transition-all duration-300 hover:bg-black/80 active:bg-black/60'
                  variants={socialVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                  whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                  transition={{ duration: 1 }} // Thời gian animation
                  viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
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
                  initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                  whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                  transition={{ duration: 1 }} // Thời gian animation
                  viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
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
                  initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                  whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                  transition={{ duration: 1 }} // Thời gian animation
                  viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
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
                  initial={{ opacity: 0, x: -100 }} // Bắt đầu với opacity 0 và dịch chuyển từ trái
                  whileInView={{ opacity: 1, x: 0 }} // Hiện ảnh ngay khi cuộn đến
                  transition={{ duration: 1 }} // Thời gian animation
                  viewport={{ once: false, amount: 0.1 }} // Hiển thị ngay khi 10% ảnh vào view
                >
                  <img src={logoDexScreener} alt='DexScreener' className='w-full h-full object-cover rounded-full' />
                </motion.a>
              </motion.div>
            </div>
          </div>
          {gallery}
        </div>
      </div>
      {renderTextDivs}
    </div>
  )
}

export default App
