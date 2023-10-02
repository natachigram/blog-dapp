import Image from 'next/image';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from '@/components/Navbar';
import BlogBody from '@/components/BlogBody';
const alchemy_id_new =
  'https://eth-sepolia.g.alchemy.com/v2/jZPfkW68_HsJcjgrdbT2TcxqO6GwGPbE';
const { chains, publicClient } = configureChains(
  [sepolia],
  [alchemyProvider({ apiKey: alchemy_id_new }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'blog-dapp',
  projectId: '66b902b0cd940d93af7988c1396543ed',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function Home() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Navbar />
          <BlogBody />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
