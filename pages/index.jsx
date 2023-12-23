import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Eminxyp
                </p>
                  <Tippy content={`Online`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-online px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-online mr-2`} />Online
                    </span>
                  </Tippy>
            
                </div>
                <p className="text-white/50 text-md mt-3">
Merhaba! Ben Emin, 15 yaşındayım ve yazılıma meraklı bir gencim. Web geliştirme konusunda kendimi geliştirmeye çalışıyorum ve yeni şeyler öğrenmeyi seviyorum. Hobilerim arasında kod yazmak, web siteleri oluşturmak ve teknolojiyle ilgili içerikleri takip etmek yer alıyor. Amacım, bu alanda kendimi daha da geliştirerek ileride profesyonel bir yazılımcı olmak. 
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="umutbayraktar" src={`https://cdn.discordapp.com/attachments/1120773551255978106/1176938380664250520/sm7qozo.jpeg?ex=6570b048&is=655e3b48&hm=f3ecd07d68899b2d9efc01dc2e495a971538b62290bf79d7a8e3448bda3c54ba&`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                  <Tippy content="Online" animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-online`} />
                  </Tippy>
                </div>
              </div>
              
            </div>
            <br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">Junior Developer</span>
          </div>
      </div>


        

    </>
  )
}
