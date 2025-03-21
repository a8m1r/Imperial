import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import SaveButton from '@/app/[lang]/components/SaveButton'
import Image from 'next/image'
import choco1 from '../../../../../public/assets/images/dubaiChocolate1.png'
import choco2 from '../../../../../public/assets/images/dubaiChocolate2.png'
import choco3 from '../../../../../public/assets/images/dubaiChocolate3.png'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.priceLists.dubaiChocolate.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.dubaiChocolate.description,
  }
}

export default async function CoffeePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    seo: { exportImport },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[24px] mt-[80px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[0px] self-start">
        {exportImport.priceLists.dubaiChocolate.title}
      </h1>
      <p className="block self-start max-w-[460px]">
        {exportImport.priceLists.dubaiChocolate.description}
      </p>
      <div className="flex gap-[56px] self-start items-center flex-wrap justify-center">
        <Image src={choco1} width={140} className="rounded " alt="chocolate" />
        <Image src={choco2} width={140} className="rounded " alt="chocolate" />
        <Image src={choco3} width={140} className="rounded " alt="chocolate" />
      </div>
      <p className="block self-start font-bold mb-[-20px] max-w-[440px]">
        {exportImport.priceLists.dubaiChocolate.flavorsTitle}:
      </p>
      <p className="max-w-[500px] self-start  mb-[-20px]">
        • {exportImport.priceLists.dubaiChocolate.flavors.one}
      </p>
      <p className="max-w-[500px] self-start  mb-[-20px]">
        • {exportImport.priceLists.dubaiChocolate.flavors.two}
      </p>
      <p className="max-w-[500px] self-start  mb-[-20px]">
        • {exportImport.priceLists.dubaiChocolate.flavors.three}:
      </p>
      <p className="max-w-[500px] self-start  mb-[-20px]">
        • {exportImport.priceLists.dubaiChocolate.flavors.four}
      </p>
      <p className="max-w-[500px] self-start  mb-[-20px]">
        • {exportImport.priceLists.dubaiChocolate.flavors.five}
      </p>
      <p className="max-w-[500px] self-start">
        • {exportImport.priceLists.dubaiChocolate.flavors.six}
      </p>
      <p className="block self-start font-bold text-[20px]  max-w-[440px]">
        {exportImport.priceLists.dubaiChocolate.price}
      </p>
      <p className="block self-start  text-[18px] mb-[-20px] max-w-[440px]">
        {exportImport.priceLists.dubaiChocolate.website}:
        <br />
        <Link
          href={'https://mr1crx-r0.myshopify.com'}
          className="text-blue-600 font-bold"
        >
          {' '}
          FIX Dessert Chocolatier
        </Link>
      </p>
    </section>
  )
}
