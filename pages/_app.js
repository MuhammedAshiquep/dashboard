import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className="bg-[#F8FAFF]">
      <Component {...pageProps} />
    </div>
}
