import { motion } from 'framer-motion'
import { SOCIAL_NETWORKS } from '../constants/SocialNetwork'

const BuyButton: React.FC = () => {
  return (
    <motion.button
      className='border bg-[#FFF714] rounded-full text-xl text-black px-8 py-2'
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={() => window.open(SOCIAL_NETWORKS.BUY_NOW, '_blank')}
    >
      Buy $MOCO Now
    </motion.button>
  )
}
export default BuyButton
